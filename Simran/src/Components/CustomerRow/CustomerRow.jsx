import React from 'react';
import styles from './CustomerRow.module.css';

const CustomerRow = ({ customer, isSelected, onSelect }) => {
    return (
        <div className={`${styles.row} ${isSelected ? styles.selected : ''}`}>
            <div className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => onSelect(customer.id, e.target.checked)}
                />
            </div>
            <div className={styles.customerCell}>
                <div className={styles.avatar}>{customer.avatar}</div>
                <div className={styles.customerInfo}>
                    <div className={styles.name}>{customer.name}</div>
                    <div className={styles.id}>#{customer.id.toString().padStart(10, '0')}</div>
                </div>
            </div>
            <div className={styles.emailCell}>
                {customer.email}
            </div>
            <div className={styles.messageCell}>
                {customer.lastMessage}
            </div>
            <div className={styles.addedByCell}>
                <img
                    src="/media/test_user-3 3.svg"
                    alt="User"
                    className={styles.userIcon}
                />
                {customer.addedBy}
            </div>
        </div>
    );
};

export default CustomerRow;