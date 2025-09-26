import React from 'react';
import styles from './CustomerControls.module.css';

const CustomerControls = ({
    filteredCustomersCount,
    searchTerm,
    onSearchChange,
    showFilters,
    onFiltersToggle
}) => {
    return (
        <>
            {/* All Customers Section */}
            <div className={styles.allCustomersSection}>
                <div className={styles.allCustomersLabel}>
                    <span className={styles.allCustomersText}>All Customers</span>
                    <span className={styles.customerCount}>{filteredCustomersCount}</span>
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
                            onChange={(e) => onSearchChange(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>
                <div className={styles.filtersContainer}>
                    <button
                        className={styles.filtersButton}
                        onClick={onFiltersToggle}
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
        </>
    );
};

export default CustomerControls;