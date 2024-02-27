import { useEffect, useState } from "react";

import Image from "next/image";

import styles from './styles.module.css'
import { Ticket } from "@/store/ducks/tickets/types";
import { Button } from "@/components/Button";
import Icon from "../Icon";

interface StateProps {   
    isOpen: boolean;
    setIsOpen: ()=> void;
}


export function CartList({ isOpen, setIsOpen }: StateProps){
    const [cart, setCart] = useState<Ticket[]>([]);
    const [reload, setReload] = useState<boolean>(true);

    let total = 0;
    let totalDiscount = 0;
    
    function percentageDiscount(){
        return (Math.round(total / totalDiscount)).toFixed(2); 
    }

    function getDifference(){
        return (total - totalDiscount).toFixed(2)
    }
    
    useEffect(()=>{
        if(reload){
            const cartValue = localStorage.getItem('cart')
            if(cartValue){
                setCart(JSON.parse(cartValue))
                setReload(false);
            }
        }
    },[reload])

    function removeCartRequest(index: number){
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart))
        setCart(cart)
        setReload(true)
    }

    return (    
        <div>
            <div className={styles.shopCartButton} onClick={()=>{setReload(true); setIsOpen();}}>
                <Icon  name="ShoppingCart" color="var(--gray-00)"/>
                <p>{cart.length}</p>
            </div>
            {isOpen && <div className={styles.modalCart}>
                <p className={styles.title}>Ingressos</p>
                <div className={styles.cartList}>
                    {cart.map((ticket, index)=>{
                        total = total + ticket.price.full
                        totalDiscount = totalDiscount + ticket.price.discount
                        return (
                            <div className={styles.ticket} key={index}>
                                <div className={styles.row}>
                                    <Image 
                                        src={ticket.image} 
                                        alt='ticket photo' 
                                        width={57} 
                                        height={62}
                                    />
                                    <div>
                                        <div className={styles.infos}>
                                                <p className="p22">Ingresso {ticket.name} 2 dias flexivel - 15/09/2022</p>
                                                <Icon 
                                                    name="Trash2" 
                                                    width={'17px'} 
                                                    height={'17px'} 
                                                    onClick={()=>{
                                                        removeCartRequest(index)}
                                                    }
                                                />
                                        </div>

                                        <div className={styles.numberOfTickets}>
                                                <p className='p22'>1 Adulto: R$500,00 2 Crianças: R$234,33</p>
                                        </div>
                                        <hr/>
                                        <div className={styles.infos}>
                                            <p>Qtd 02</p>
                                            <p>R$ {ticket.price.full /2}</p>
                                        </div>
                                        <div className={styles.subtotal}>
                                            <p className={styles.subtotalParagraph}>Subtotal</p>
                                            <p className={styles.totalPrice}>R$ {ticket.price.full}</p>
                                        </div>
                                    </div>
                                </div>
                                {index !== cart.length-1 && <hr/>}
                            </div>
                        )
                    })}
                </div>

                {cart.length>0 ?
                    <div className={styles.priceInfos}>
                        <hr/>
                        <div className={styles.row}> 
                            <p>Ingressos</p>
                            <p>R${total}</p>
                        </div>

                        
                        <div className={styles.subtotal}>
                            <p className={styles.subtotalParagraph}>Subtotal</p>
                            <p className={styles.totalPrice}>R${total}</p>
                        </div>
                        
                        <div className={styles.row}> 
                            <p>1X de R${totalDiscount} com desconto de <div className={styles.specialInfo}>({percentageDiscount()}%)</div></p>
                            <p className={styles.specialInfo}><b>R${getDifference()}</b></p>
                        </div>
                        
                        <div className={styles.row}> 
                            <p>10X Sem juros de R${total}</p>
                            <p>R${total}</p>
                        </div>

                        <hr/>

                        <div className={styles.row}> 
                            <p className={styles.subtotalParagraph}>Valor total</p>
                            <p className={styles.totalFooter}>R${total}</p>
                        </div>

                        <Button label="Ir para check out" color="var(--brand-color-blue-darker)" onClick={()=>{return;}}/>
                    </div>
                    :
                    <>
                        <p>Carrinho vazio</p>
                    </>
                }
                </div>
            }
        </div>
    )
}