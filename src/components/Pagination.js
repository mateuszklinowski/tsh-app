import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

const Pagination = ({pagination, loading, updateFilters, getPayments}) => {

    const nextPage = () => {
        updateFilters({page: Number(pagination.current) + 1});
        getPayments();

    };

    const prevPage = () => {
        updateFilters({page: Number(pagination.current) - 1});
        getPayments();
    };

    const goTo = (pageNumber) => {
        updateFilters({page: pageNumber});
        getPayments();
    };

    function calcPaginationBtns(pagination) {
        const currentPage = Number(pagination.current);
        let paginationArr = [];

        for (let i = -2; i <= 4; i++) {
            if (currentPage + i >= 0 && currentPage + i < pagination.total && paginationArr.length < 5) {
                paginationArr.push(currentPage + i);
            }
        }
        return paginationArr;
    }

    let paginationArr = calcPaginationBtns(pagination);

    return (
        <div className="pagination-container">
            <button disabled={!pagination.left || loading} onClick={prevPage}> <i className="icon-arrow arrow-left"/>  </button>
            {paginationArr.map(pageNumber =>
                <button key={pageNumber} disabled={loading} onClick={() => goTo(pageNumber)}>{pageNumber + 1}</button>
            )}
            <button disabled={!pagination.right || loading} onClick={nextPage}> <i className="icon-arrow arrow-right"/> </button>
        </div>
    )
};

const mapStateToProps = state => {

    return {
        pagination: state.get('pagination').toJS(),
        loading: state.get('app').toJS().loading
    }
};

export const PaginationContainer = connect(mapStateToProps, actionCreators)(Pagination);