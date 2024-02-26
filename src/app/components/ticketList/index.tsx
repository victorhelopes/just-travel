import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect } from "react-redux"
import Image from "next/image";

import * as TicketsActions from '../../../store/ducks/tickets/actions'

import { Ticket } from "@/store/ducks/tickets/types";
import { ApplicationState } from "@/store";

import Hearth from '../../../assets/hearth.svg'
import Location from '../../../assets/location.svg'

import styles from "./styles.module.css"
import { Button } from "@/components/Button";

interface StateProps {
    tickets: Ticket[];
    name: string;
    page: number;
    limit: number;
    error: boolean;
    loading: boolean;
}

interface DispatchProps {
    loadRequest(data: { name: string; page: number; limit: number }): void;
}

type Props = StateProps & DispatchProps

class TicketsList extends Component<Props>{

    componentDidMount(): void {
        const { loadRequest, name, page, limit } = this.props;
        loadRequest({name: name, page: page, limit: limit})
    }


    render(): ReactNode {  
        const {tickets} = this.props;

        return (
            <>
                {tickets?.map((ticket)=>{
                    return (
                        <div className={styles.ticketBody} key={ticket.id}>
                            <div>
                                <div className={styles.imageHeader}>
                                    <p>Ingresso</p>
                                    <Image src={Hearth} alt='ticket photo' width={24} height={24}/>
                                </div>       
                                <Image src={ticket.image} alt='ticket photo' width={213} height={233}/>
                            </div>
                            <div className={styles.ticketInfos}>
                                <div className={styles.generalInfo}>
                                    <h3>
                                        {ticket.name}
                                        <div className={styles.location}>
                                            <Image src={Location} alt='ticket photo' width={24} height={24}/>
                                            <p className="p3">
                                                {ticket.location}
                                            </p>
                                        </div>
                                    </h3>
                                    <div className={styles.rating}>
                                        <div className={styles.ratingValue}>
                                            {ticket.rating.value}
                                        </div>
                                        <p className={styles.ratingRange}>Excellent</p>
                                        <p className={styles.ratingReviewsNumber}>({ticket.rating.reviewsCount} Reviews)</p>
                                        
                                    </div>
                                </div>
                                <div className={styles.price}>

                                    <div className={styles.division}/>
                                    <div className={styles.priceInfo}>
                                        <p className={styles.fullPrice}>de {ticket.price.full} por</p>
                                        <div className={styles.discountValue}>
                                            <p>R$</p>
                                            <h2 className={styles.discount}>{ticket.price.discount}</h2>
                                        </div>
                                        <Button label="Saiba mais" onClick={()=> {return;}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    tickets: state.tickets.tickets,
    name: state.tickets.name,
    page: state.tickets.page,
    limit: state.tickets.limit,
    error: state.tickets.error,
    loading: state.tickets.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TicketsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)