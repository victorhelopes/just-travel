'use client'
import Image from 'next/image';

import Logo from '../../../public/Logo.svg'
import BrazilFlag from '../../assets/brazilFlag.svg'
import UserIcon from '../../assets/user.svg'
import QuestionIcon from '../../assets/message-question-checkmark.svg'

import styles from './styles.module.css'
import {CartList} from '../CartList';
import { useState } from 'react';

export function Header(){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <header className={styles.header}>
            <Image  src={Logo} alt='Just-Travel logo'/>
            <div className={styles.actions}>
                <p>Cotação dólar hoje: R$5,53</p>
                <Image  src={BrazilFlag} alt='Country flag'/>
                <Image  src={QuestionIcon} alt='Question'/>
                <div className={styles.division}/>
                <div className={styles.login}>
                    <Image  src={UserIcon} alt='User Avatar'/>
                    <p>Entrar</p>
                </div>
                <div className={styles.shopCart}>
                    <CartList isOpen={isOpen} setIsOpen={()=>{setIsOpen(!isOpen)}}/>
                </div>
            </div>
        </header>
    )
}