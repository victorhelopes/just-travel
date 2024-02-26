import styles from './styles.module.css'

interface IButton{
    label: string;
    onClick: ()=>void;
}

export function Button({label, onClick}: IButton){
    return(
    <button 
        className={styles.button}
        onClick={onClick}
    >
        {label}
    </button>)
}