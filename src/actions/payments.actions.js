import fetch from 'cross-fetch';
import {store} from './../index';
import {apiUrl} from "../config/api";

export function requestPayments() {
    return {
        type: 'REQUEST_PAYMENTS',
    };
}

export function requestPaymentsSuccess(json){
    return {
        type: 'REQUEST_PAYMENTS_SUCCESS',
        payload:{
            payments:json.payments,
            pagination:json.pagination
        }
    }
}

export function requestPaymentsFail(){
    return {
        type:'REQUEST_PAYMENTS_FAIL',
    }
}


export function getPayments(){

    let url = new URL(apiUrl);
    let params = store.getState().toJS().filters;
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return dispatch => {
        dispatch(requestPayments());
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                return dispatch(requestPaymentsSuccess(json))
            })
            .catch(err=>{
                return dispatch(requestPaymentsFail(err))
            })
    }
}