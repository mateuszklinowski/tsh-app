import React from 'react';
import {Payment} from "./Payment";
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import PropTypes from 'prop-types';

export const Payments = ({payments, showModal}) => {
    return (
        <div className="payments-container">
            <table>
                <thead>
                    <tr>
                        <th>Supplier</th>
                        <th>Pound Rating</th>
                        <th>Reference</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {payments.map(payment=>
                    <Payment payment={payment} showModal={showModal} key={payment.payment_ref}/>
                )}
                </tbody>
            </table>
        </div>
    )
};

Payments.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({
      payment_amount: PropTypes.string,
      payment_cost_rating: PropTypes.string,
      payment_ref: PropTypes.string,
      payment_supplier: PropTypes.string,
  }))
};
const mapStateToProps = state => {
    return {
        payments: state.get('payments').toJS()
    }
};

export const PaymentsContainer = connect(mapStateToProps,actionCreators)(Payments);

