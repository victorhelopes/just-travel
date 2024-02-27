import styles from './styles.module.css'

interface IButton{
    label: string;
    rightIcon?: JSX.Element
    color?: string;
    variant?: 'outlined' | 'filled';
    onClick: ()=>void;
}

export function Button({label, variant, color, rightIcon, onClick}: IButton){
    return(
    <button 
        className={variant? styles[variant] : styles.filled}
        onClick={onClick}
        style={{ cursor: 'pointer', backgroundColor: color || 'var(--brand-color-blue)'}}
    >
        {label}
        {rightIcon}
    </button>)
}