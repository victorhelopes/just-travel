import styles from './styles.module.css'

interface IButton{
    label: string;
}

export function Button({label}: IButton){
    return(<button className={styles.button}>{label}</button>)
}