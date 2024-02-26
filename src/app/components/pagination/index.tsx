import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect } from "react-redux"

import styles from "./styles.module.css"

import { ApplicationState } from "@/store";

import * as TicketsActions from '../../../store/ducks/tickets/actions'

import { Select } from "@/components/Select";
import { ChevronLeft, ChevronRight } from "react-feather";

 interface StateProps {
    name: string;
    page: number;
    limit: number;
}

interface DispatchProps {
    loadRequest(data: { name: string; page: number; limit: number }): void;
}

type Props = StateProps & DispatchProps

const numberOfPages:number[] = [1,2,3,4]

export class Pagination extends Component<Props>{

    render(): ReactNode {
        const { page, limit, name, loadRequest } = this.props;
        return(
            <div className={styles.paginationBody}>
                <p className={styles.numberOfResult}>{limit} Resultados</p>
                <p className={styles.selectPage}>
                    Página: 
                    <Select 
                        options={[1,2,3,4]} 
                        selected={page} 
                        onChange={(value)=>{
                            loadRequest({page: value, name, limit})
                        }}
                    />
                </p>
                <div className={styles.listPagesButton}>
                    <ChevronLeft
                        className={page === 1? styles.svgDisabled : styles.svgEnable}
                        onClick={()=>{
                            if(page !== 1)
                            loadRequest({page: page -1, name, limit})
                        }}
                    />
                    {numberOfPages.slice(numberOfPages.length - page >= 3? page-1 : numberOfPages.length-3).map((pageNumber, index)=>{
                        if(index == 3) return <p>...</p>;
                        if(index >= 3) return false;
                        return (
                            <p
                                key={pageNumber} 
                                onClick={()=>{
                                    loadRequest({page: pageNumber, name, limit})
                                }}
                            >
                                {pageNumber}
                            </p>
                        )
                    })}
                    <ChevronRight
                        className={page === numberOfPages[numberOfPages.length-1] ? styles.svgDisabled : styles.svgEnable}
                        onClick={()=>{
                            if(page !== numberOfPages[numberOfPages.length -1])
                                loadRequest({page: page +1, name, limit})
                        }}
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: ApplicationState) => ({
    name: state.tickets.name,
    page: state.tickets.page,
    limit: state.tickets.limit,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TicketsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)