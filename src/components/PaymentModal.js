import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import Currency from 'react-currency-formatter';


const PaymentModal = ({modal, hideModal}) => {

    const closeModal = ($event) => {
        $event.preventDefault();
        hideModal();
    };

    return (
        <div onClick={($event) => closeModal($event)} className={modal.show ? 'modal-wrapper show' : 'modal-wrapper'}>
            <div className="modal">
                <button className="close-btn" onClick={($event) => closeModal($event)}>X</button>
                <div className="modal-title">
                    {modal.payment.payment_supplier}
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="row-name">Pound Rating:</div>
                        <div className="row-value">
                            <div className="icons-container">
                                <span
                                    className={modal.payment.payment_cost_rating > 0 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                                <span
                                    className={modal.payment.payment_cost_rating > 1 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                                <span
                                    className={modal.payment.payment_cost_rating > 2 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                                <span
                                    className={modal.payment.payment_cost_rating > 3 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                                <span
                                    className={modal.payment.payment_cost_rating > 4 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-name">Reference</div>
                        <div className="row-value">{modal.payment.payment_ref}</div>
                    </div>
                    <div className="row">
                        <div className="row-name">Value:</div>
                        <div className="row-value">
                            <Currency quantity={Number(modal.payment.payment_amount)} currency={'GBP'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        modal: state.get('modal').toJS()
    }
};

export const PaymentModalContainer = connect(mapStateToProps, actionCreators)(PaymentModal);