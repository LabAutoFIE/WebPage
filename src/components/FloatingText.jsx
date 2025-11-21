import { useState } from 'react';
import styles from '@/styles/floating-text.module.css';

const FloatingText = ({ children, text }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={styles.floatingWrapper}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className={styles.floatingText}>{text}</div>}
        </div>
    );
};

export default FloatingText;