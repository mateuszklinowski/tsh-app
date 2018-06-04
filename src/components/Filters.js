import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';


export const Filters = ({filters, resetFilters, getPayments, updateFilters}) => {

    let ratingInput;
    let queryInput;

    const reset = (e) => {
        e.preventDefault();
        queryInput.value = "";
        ratingInput.value = 0;
        resetFilters();
        getPayments();
    };

    const featchPayments = (e)=>{
        e.preventDefault();
        let filters = {
            query: queryInput.value.trim(),
            rating: ratingInput.value.trim(),
            /*always start search with page 0*/
            page:0,
        };
        updateFilters(filters);
        getPayments();
    };

    return (
        <div className="filters-container">
            <form className="filters-form" onSubmit={featchPayments}>
                    <input className="form-control" type="text" placeholder="Search suppliers" id="query" name="query"
                           ref={node => queryInput = node}/>
                    <select className="form-control" id="rating" name="rating" ref={node => ratingInput = node} defaultValue={0}>
                        <option value={0}>Select pound rating</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button className="form-control form-btn btn-grey" onClick={reset}>Reset</button>
                    <button className="form-control form-btn btn-blue" type="submit">Search</button>
            </form>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        filters: state.get('filters').toJS()
    }
};

export const FiltersContainer = connect(mapStateToProps, actionCreators)(Filters);

