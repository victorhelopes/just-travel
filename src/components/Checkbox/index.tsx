import styles from './checkbox.module.css'

interface ICheckbox{
    label: string;
    value: string;
    
}

export function Checkbox({label, value}: ICheckbox){
    return(
        <div className={styles.checkbox}>
            <input type="checkbox" value={value}/>
            <label>{label}</label>
        </div>
    )
}