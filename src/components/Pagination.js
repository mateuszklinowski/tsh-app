import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

const Pagination = ({pagination, loading, updateFilters, getPayments}) => {

    const nextPage = () => {
        updateFilters({page:Number(pagination.current)+1});
        getPayments();

    };

    const prevPage = () =>{
        updateFilters({page:Number(pagination.current)-1});
        getPayments();
    };

    return (
        <div className="pagination-container">
            <ul>
                <li>
                    <button onClick={prevPage}>prev</button>
                    <button onClick={nextPage}>next</button>
                </li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {

    return {
        pagination: state.get('pagination').toJS(),
        loading: state.get('app').toJS().loading
    }
};

export const PaginationContainer = connect(mapStateToProps,actionCreators)(Pagination);