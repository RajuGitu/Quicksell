import React, { useState, useEffect, useMemo, useCallback } from 'react';
import customerData from '../../Data/Customer';
import CustomerRow from '../CustomerRow/CustomerRow';
import Header from '../Header';
import styles from './CustomerManagement.module.css';

const CustomerManagement = () => {
    // State management
    const [customers] = useState(customerData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [selectedCustomers, setSelectedCustomers] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
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

    // Calculate pagination
    const totalPages = Math.ceil(filteredAndSortedCustomers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCustomers = filteredAndSortedCustomers.slice(startIndex, endIndex);

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
        // Handle menu button click - you can implement your menu logic here
        console.log('Menu clicked');
        // For example: open a sidebar, show dropdown menu, etc.
    }, []);

    // Reset to first page when search or sort changes
    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch, sortConfig]);

    const getSortIcon = (column) => {
        if (sortConfig.key !== column) return '↕';
        return sortConfig.direction === 'asc' ? '↑' : '↓';
    };

    return (
        <div className={styles.container}>
            {/* Header Component */}
            <Header onMenuClick={handleMenuClick} />

            {/* All Customers Section */}
            <div className={styles.allCustomersSection}>
                <div className={styles.allCustomersLabel}>
                    <span className={styles.allCustomersText}>All Customers</span>
                    <span className={styles.customerCount}>{filteredAndSortedCustomers.length}</span>
                </div>
            </div>

            {/* Search and Filter Controls */}
            <div className={styles.controls}>
                <div className={styles.searchBox}>
                    <div className={styles.searchInputContainer}>
                        <img
                            src="/media/test_Search-3.svg"
                            alt="Search"
                            className={styles.searchIcon}
                        />
                        <input
                            type="text"
                            placeholder="Search Customers"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>
                <div className={styles.filtersContainer}>
                    <button
                        className={styles.filtersButton}
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <img
                            src="/media/test_Filter.svg"
                            alt="Filter"
                            style={{ width: '16px', height: '16px' }}
                        />
                        Add Filters ▼
                    </button>
                    {showFilters && (
                        <div className={styles.filtersDropdown}>
                            <div className={styles.filterItem}>Filter 1</div>
                            <div className={styles.filterItem}>Filter 2</div>
                            <div className={styles.filterItem}>Filter 3</div>
                            <div className={styles.filterItem}>Filter 4</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Customer Table */}
            <div className={styles.tableContainer}>
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

                {/* No results message */}
                {displayedCustomers.length === 0 && debouncedSearch && (
                    <div className={styles.noResults}>
                        No customers found matching "{debouncedSearch}"
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        className={`${styles.pageButton} ${currentPage === 1 ? styles.pageButtonDisabled : ''}`}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <div className={styles.pageNumbers}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(pageNum => {
                                // Show first page, last page, current page, and pages around current
                                return pageNum === 1 ||
                                    pageNum === totalPages ||
                                    Math.abs(pageNum - currentPage) <= 2;
                            })
                            .map((pageNum, index, array) => (
                                <React.Fragment key={pageNum}>
                                    {index > 0 && array[index - 1] < pageNum - 1 && (
                                        <span className={styles.pageEllipsis}>...</span>
                                    )}
                                    <button
                                        className={`${styles.pageButton} ${currentPage === pageNum ? styles.pageButtonActive : ''}`}
                                        onClick={() => setCurrentPage(pageNum)}
                                    >
                                        {pageNum}
                                    </button>
                                </React.Fragment>
                            ))}
                    </div>

                    <button
                        className={`${styles.pageButton} ${currentPage === totalPages ? styles.pageButtonDisabled : ''}`}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Page Info */}
            <div className={styles.pageInfo}>
                Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedCustomers.length)} of {filteredAndSortedCustomers.length} customers
            </div>
        </div>
    );
};

export default CustomerManagement;