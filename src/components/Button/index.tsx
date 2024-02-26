import styles from './styles.module.css'

interface IButton{
    label: string;
    variant?: 'outlined' | 'filled';
    onClick: ()=>void;
}

export function Button({label, variant, onClick}: IButton){
    return(
    <button 
        className={variant? styles[variant] : styles.filled}
        onClick={onClick}
    >
        {label}
    </button>)
}