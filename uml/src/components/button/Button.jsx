import './Button.css';

export const Button = ({ children, onClick, variant, size }) => {
    return (
        <button className={`btn ${variant} ${size}`} onClick={onClick}>
            {children}
        </button>
    )
}