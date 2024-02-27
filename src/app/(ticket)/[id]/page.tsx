'use client'
import { Button } from "@/components/Button";
import Icon from "@/components/Icon";
import { api } from "@/services"
import { Ticket } from "@/store/ducks/tickets/types";
import { useEffect, useState } from "react"

import styles from './id.module.css'
import Image from "next/image";
import SimpleMap from "@/components/map";
import { useRouter } from "next/navigation";

export default function Id({ params }: { params: { id: string } }){
    const router = useRouter();
    const [ticketInfo, setTicketInfo] = useState<Ticket>({
        id: params.id,
        name: '',
        createdAt: '',
        description: '',
        image: '',
        location: '',
        price: {
            discount: 0,
            full: 0
        },
        rating: {
            reviewsCount: 0,
            value: 0
        },
        updatedAt: ''
    });

    useEffect(()=>{
        async function getTicketInfo(){
            try{
                const {data} = await api.get(`/tickets/${params.id}`)
                setTicketInfo(data)
            }catch(e){
                console.log(e)
            }
        }

        getTicketInfo();
    },[params.id])

    return(
        <div className={styles.ticketInfoBody}>
            <div className={styles.headerInfos}>
                <Icon onClick={()=>{router.push('/')}} name="CornerUpLeft"/>
                <div className={styles.nameAndLocation}>
                    <h2>{ticketInfo.name}</h2>
                    <p className="p3"> 
                        <Icon name="MapPin"/> 
                        {ticketInfo.location}
                    </p>
                </div>
            </div>

            <div className={styles.image}>
                <div className={styles.button}>
                    <Button label="Visualizar mais fotos" onClick={()=>{}}/>
                </div>
                <Image 
                    src={`${ticketInfo.image}`} 
                    alt='ticket photo' 
                    width={100} 
                    height={100}
                />
            </div>

            <div className={styles.bodyInfos}>
                <div style={{width: '100%'}}>
                    <div className={styles.rating}>
                        <div className={styles.ratingValue}>
                            {ticketInfo.rating.value}
                        </div>
                        <p className={styles.ratingRange}>Excellent</p>
                        <p className={styles.ratingReviewsNumber}>({ticketInfo.rating.reviewsCount} Reviews)</p>                
                    </div>

                    <div className={styles.list}>
                        <p>
                            <Icon size={18} name="Wifi"/>
                            Wifi
                        </p>
                        <p>
                            <Icon size={18} name="Coffee"/>
                            Café da manhã
                        </p>
                        <p>
                            <Icon size={18} name="Home"/>
                            Quarto
                        </p>
                    </div>

                    <div className={styles.description}>
                        <h3>Sobre o Ingresso selecionado:</h3>
                        <p>{ticketInfo.description}</p>
                    </div>

                    <div>
                        <h3>Localização</h3>
                        <SimpleMap/>
                        {ticketInfo.location}
                    </div>
                </div>
            
                <div className={styles.ticketInfos}>
                    <div className={styles.ticketInfo}>
                        <div className={styles.row}>
                            <Icon name="Calendar" color="var(--brand-color-blue)"/>
                            <div>
                                <p className="p22">Data do ingresso</p>
                                <p className="p3">22/12/2022</p>
                            </div>
                        </div>
                        <Icon size={24} name="ChevronDown"/>
                    </div>

                    <hr/>

                    <div className={styles.ticketInfo}>
                        <div className={styles.row}>
                            <Icon name="User" color="var(--brand-color-blue)"/>
                            <div>
                                <p className="p22">Ingressos</p>
                                <p className="p3">03 ingressos</p>
                            </div>
                        </div>
                        <Icon size={24} name="ChevronDown"/>
                    </div>

                    <hr/>

                    <div className={styles.ticketType}>
                        <div className={styles.ticketInfo}>
                            <p className="p3">01 Ingresso infantil</p>
                            <p className="p3">R$245,99</p>
                        </div>

                        <div className={styles.ticketInfo}>
                            <p className="p3">02 Ingresso adulto</p>
                            <p className="p3">R$245,99</p>
                        </div>
                    </div>
                
                    <hr/>

                    <div className={styles.priceInfo}>
                        <div className={styles.ticketInfo}>
                                <p className="p22">Valor total</p>
                                <h2>R$ {ticketInfo.price.discount}</h2>
                        </div>
                        <Button 
                            label="Comprar ingresso" 
                            onClick={()=>{
                                const cart = localStorage.getItem('cart')
                                if(cart){
                                    const newCart = JSON.parse(cart)
                                    newCart.push(ticketInfo)
                                    localStorage.setItem('cart', JSON.stringify(newCart))
                                    window.location.reload();
                                    return;
                                }
                                console.log(ticketInfo)
                                localStorage.setItem('cart', JSON.stringify([ticketInfo]))
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}