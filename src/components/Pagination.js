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

    const goTo = (pageNumber) => {
        updateFilters({page:pageNumber});
        getPayments();
    };

    function calcPaginationBtns(pagination){
        const currentPage = Number(pagination.current);
        let paginationArr = [];

        for(let i = -2; i <= 4; i++){
            if(currentPage+i >= 0 && currentPage+i < pagination.total && paginationArr.length < 5){
                paginationArr.push(currentPage+i);
            }
        }
        return paginationArr;
    }

    let paginationArr =  calcPaginationBtns(pagination);
    console.log(paginationArr);

    return (
        <div className="pagination-container">
            <ul>
                <li>
                    <button disabled={!pagination.left || loading} onClick={prevPage}>prev</button>
                </li>

                {paginationArr.map(pageNumber=> <li key={pageNumber}>
                    <button disabled={loading}  onClick={()=>goTo(pageNumber)}>{pageNumber+1}</button>
                </li>)}

                <li>
                    <button disabled={!pagination.right || loading} onClick={nextPage}>next</button>
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