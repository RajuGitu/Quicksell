import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import customerData from '../../Data/Customer';
import CustomerRow from '../CustomerRow/CustomerRow';
import Header from '../Header';
import CustomerControls from '../CustomerControls ';
import styles from './CustomerManagement.module.css';

const CustomerManagement = () => {
    // State management
    const [customers] = useState(customerData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [selectedCustomers, setSelectedCustomers] = useState(new Set());
    const [showFilters, setShowFilters] = useState(false);

    // Infinite scroll state
    const [displayedCount, setDisplayedCount] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
    const tableContainerRef = useRef(null);
    const itemsPerPage = 30;

    // Debounced search effect
    const [debouncedSearch, setDebouncedSearch] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 250);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Filter and sort customers
    const filteredAndSortedCustomers = useMemo(() => {
        let filtered = customers.filter(customer =>
            customer.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            customer.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            customer.phone.includes(debouncedSearch)
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                if (sortConfig.key === 'lastMessage') {
                    aValue = new Date(aValue);
                    bValue = new Date(bValue);
                }

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return filtered;
    }, [customers, debouncedSearch, sortConfig]);

    // Get currently displayed customers
    const displayedCustomers = useMemo(() => {
        return filteredAndSortedCustomers.slice(0, displayedCount);
    }, [filteredAndSortedCustomers, displayedCount]);

    // Check if there are more items to load
    const hasMore = displayedCount < filteredAndSortedCustomers.length;

    // Load more items function
    const loadMore = useCallback(() => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        // Simulate loading delay for better UX
        setTimeout(() => {
            setDisplayedCount(prev => Math.min(prev + itemsPerPage, filteredAndSortedCustomers.length));
            setIsLoading(false);
        }, 300);
    }, [isLoading, hasMore, filteredAndSortedCustomers.length]);

    // Infinite scroll handler
    const handleScroll = useCallback(() => {
        const container = tableContainerRef.current;
        if (!container || isLoading || !hasMore) return;

        const { scrollTop, scrollHeight, clientHeight } = container;
        // Load more when user scrolls within 100px of the bottom
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            loadMore();
        }
    }, [loadMore, isLoading, hasMore]);

    // Set up scroll event listener
    useEffect(() => {
        const container = tableContainerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Reset displayed count when search or sort changes
    useEffect(() => {
        setDisplayedCount(itemsPerPage);
        setIsLoading(false);
    }, [debouncedSearch, sortConfig]);

    // Event handlers
    const handleSort = useCallback((key) => {
        setSortConfig(prevConfig => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
        }));
    }, []);

    const handleCustomerSelect = useCallback((customerId, isSelected) => {
        setSelectedCustomers(prev => {
            const newSelected = new Set(prev);
            if (isSelected) {
                newSelected.add(customerId);
            } else {
                newSelected.delete(customerId);
            }
            return newSelected;
        });
    }, []);

    const handleSelectAll = useCallback((isSelected) => {
        if (isSelected) {
            setSelectedCustomers(new Set(displayedCustomers.map(c => c.id)));
        } else {
            setSelectedCustomers(new Set());
        }
    }, [displayedCustomers]);

    const handleMenuClick = useCallback(() => {
        console.log('Menu clicked');
    }, []);

    // Handlers for CustomerControls component
    const handleSearchChange = useCallback((value) => {
        setSearchTerm(value);
    }, []);

    const handleFiltersToggle = useCallback(() => {
        setShowFilters(!showFilters);
    }, [showFilters]);

    const getSortIcon = (column) => {
        if (sortConfig.key !== column) return '↕';
        return sortConfig.direction === 'asc' ? '↑' : '↓';
    };

    return (
        <div className={styles.container}>
            {/* Header Component */}
            <Header onMenuClick={handleMenuClick} />

            {/* Customer Controls Component */}
            <CustomerControls
                filteredCustomersCount={filteredAndSortedCustomers.length}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                showFilters={showFilters}
                onFiltersToggle={handleFiltersToggle}
            />

            {/* Customer Table */}
            <div
                className={styles.tableContainer}
                ref={tableContainerRef}
                style={{ maxHeight: '70vh', overflowY: 'auto' }}
            >
                {/* Table Header */}
                <div className={styles.tableHeader}>
                    <div className={styles.headerCheckbox}>
                        <input
                            type="checkbox"
                            checked={selectedCustomers.size === displayedCustomers.length && displayedCustomers.length > 0}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                    </div>
                    <div className={`${styles.headerCell} ${styles.customerHeader}`} onClick={() => handleSort('name')}>
                        Customer <span className={styles.sortIcon}>{getSortIcon('name')}</span>
                    </div>
                    <div className={`${styles.headerCell} ${styles.customerHeader}`} onClick={() => handleSort('score')}>
                        Score <span className={styles.sortIcon}>{getSortIcon('score')}</span>
                    </div>
                    <div className={`${styles.headerCell} ${styles.emailHeader}`} onClick={() => handleSort('email')}>
                        Email <span className={styles.sortIcon}>{getSortIcon('email')}</span>
                    </div>
                    <div className={`${styles.headerCell} ${styles.messageHeader}`} onClick={() => handleSort('lastMessage')}>
                        Last Message <span className={styles.sortIcon}>{getSortIcon('lastMessage')}</span>
                    </div>
                    <div className={`${styles.headerCell} ${styles.addedByHeader}`} onClick={() => handleSort('addedBy')}>
                        Added By <span className={styles.sortIcon}>{getSortIcon('addedBy')}</span>
                    </div>
                </div>

                {/* Customer Rows */}
                {displayedCustomers.map(customer => (
                    <CustomerRow
                        key={customer.id}
                        customer={customer}
                        isSelected={selectedCustomers.has(customer.id)}
                        onSelect={handleCustomerSelect}
                    />
                ))}

                {/* Loading indicator */}
                {isLoading && (
                    <div className={styles.loadingIndicator}>
                        <div className={styles.spinner}></div>
                        Loading more customers...
                    </div>
                )}

                {/* Load more button (fallback for users who prefer clicking) */}
                {!isLoading && hasMore && displayedCustomers.length > 0 && (
                    <div className={styles.loadMoreContainer}>
                        <button
                            className={styles.loadMoreButton}
                            onClick={loadMore}
                            type="button"
                        >
                            Load More ({filteredAndSortedCustomers.length - displayedCount} remaining)
                        </button>
                    </div>
                )}

                {/* End of results indicator */}
                {!hasMore && displayedCustomers.length > 0 && (
                    <div className={styles.endOfResults}>
                        All customers loaded ({filteredAndSortedCustomers.length} total)
                    </div>
                )}

                {/* No results message */}
                {displayedCustomers.length === 0 && debouncedSearch && (
                    <div className={styles.noResults}>
                        No customers found matching "{debouncedSearch}"
                    </div>
                )}
            </div>

            {/* Status Info */}
            <div className={styles.statusInfo}>
                Showing {displayedCustomers.length} of {filteredAndSortedCustomers.length} customers
                {hasMore && ` (${filteredAndSortedCustomers.length - displayedCount} more available)`}
            </div>
        </div>
    );
};

export default CustomerManagement;