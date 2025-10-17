import { useState } from 'react';
import '@/styles/floating-text.css';

const FloatingText = ({ children, text }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="floating-wrapper"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className="floating-text">{text}</div>}
        </div>
    );
};

export default FloatingText;