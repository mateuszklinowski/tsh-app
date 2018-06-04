import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

export const Payment = ({payment, showModal}) => {

    const openModal = () =>{
        showModal(payment);
    };

    return (
       <tr onClick={()=> openModal()}>
           <td>
               {payment.payment_supplier}
           </td>
           <td>
               <div className="icons-container">
                   <span className={payment.payment_cost_rating > 0 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                   <span className={payment.payment_cost_rating > 1 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                   <span className={payment.payment_cost_rating > 2 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                   <span className={payment.payment_cost_rating > 3 ? 'rating-icon blue' : 'rating-icon'}>£</span>
                   <span className={payment.payment_cost_rating > 4 ? 'rating-icon blue' : 'rating-icon'}>£</span>
               </div>
           </td>
           <td>
               {payment.payment_ref}
           </td>
           <td>
               <Currency quantity={Number(payment.payment_amount)} currency={'GBP'}/>
           </td>
       </tr>
    )
};

Payment.propTypes = {
  payments: PropTypes.shape({
      payment_amount: PropTypes.string,
      payment_cost_rating: PropTypes.string,
      payment_ref: PropTypes.string,
      payment_supplier: PropTypes.string,
  })
};
