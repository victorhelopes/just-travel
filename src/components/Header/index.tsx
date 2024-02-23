import Image from 'next/image';

import Logo from '../../../public/Logo.svg'
import BrazilFlag from '../../assets/brazil-flag.png'
import UserIcon from '../../assets/user.png'
import QuestionIcon from '../../assets/message-question-checkmark.png'
import ShopIcon from '../../assets/shop.png'

import styles from './styles.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <Image  src={Logo} alt='Just-Travel logo'/>
            <div className={styles.actions}>
                <p>Cotação dólar hoje: R$5,53</p>
                <Image  src={BrazilFlag} alt='Just-Travel logo'/>
                <Image  src={QuestionIcon} alt='Just-Travel logo'/>
                <div className={styles.division}/>
                <div className={styles.login}>
                    <Image  src={UserIcon} alt='Just-Travel logo'/>
                    <p>Entrar</p>
                </div>
                <div className={styles.shopCart}>
                    <Image  src={ShopIcon} alt='Just-Travel logo'/>
                    <p>0</p>
                </div>
            </div>
        </header>
    )
}