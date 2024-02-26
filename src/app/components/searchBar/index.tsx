import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect } from "react-redux"

import styles from "./searchBar.module.css"

import { ApplicationState } from "@/store";

import * as TicketsActions from '../../../store/ducks/tickets/actions'
import { Textfield } from "@/components/Textfield";


 interface StateProps {
    name: string;
    page: number;
    limit: number;
}

interface DispatchProps {
    loadRequest(data: { name: string; page: number; limit: number }): void;
}

type Props = StateProps & DispatchProps

export class SearchBar extends Component<Props>{

    render(): ReactNode {
        const { page, limit, loadRequest } = this.props;
        return(
            <div className={styles.searchBar}>
                <hr/>
                <div className={styles.searchBarInput}>
                    <Textfield 
                        placeholder="Busque por atração" 
                        rightIcon="Search" 
                        iconColor='var(--gray-20)'
                        type="search"
                        onChange={(value)=>{
                            loadRequest({name: value, page, limit,})
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)