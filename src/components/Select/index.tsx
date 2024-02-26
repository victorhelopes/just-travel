import styles from './styles.module.css'

interface ISelect{
    options: number[];
    selected: number;
    onChange: (value: number)=> void;
}

export function Select({options, selected, onChange}: ISelect){
    return (
        <select className={styles.select} onChange={(e)=>{onChange(parseInt(e.target.value))}}>
            {options.map((option)=>{
                return (
                    <option 
                        selected={selected === option} 
                        key={option} 
                        value={option}
                    >
                        {option}
                    </option>
                )
            })}
        </select>
    )
}