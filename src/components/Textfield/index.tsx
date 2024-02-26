import { Feather } from 'react-feather';
import styles from './textfield.module.css'
import Icon, { IconName } from '../Icon';

interface ITextField{
    placeholder: string;
    onChange: (value: string)=> void;
    label?: string;
    iconColor?: string;
    rightIcon?: IconName;
    type?: 'search' 
}

export function Textfield({placeholder, label, iconColor, rightIcon, type, onChange}: ITextField){
    return(
        <div className={styles.textfield}>
            {label}
            <div className={styles.input}>
                {type && type === 'search'? 
                    <div className={styles.mapPin}>
                        <Icon name='MapPin' color='var(--brand-color-blue'/>
                    </div>
                    : ''
                }
                <input placeholder={placeholder} onChange={(e)=>{onChange(e.target.value)}}/>
                    {rightIcon && 
                        <div className={styles.svg}>
                            <Icon 
                                color={iconColor? iconColor : 'black'} 
                                name={rightIcon}
                            />
                        </div>
                    }
            </div>
        </div>
    )
}