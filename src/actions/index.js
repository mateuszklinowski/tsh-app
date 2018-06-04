import * as fromFilterActions from './filters.actions';
import * as fromPaymentsActions from './payments.actions';
import * as fromModalActions from './modal.actions';

export const resetFilters = fromFilterActions.resetFilters;

export const getPayments = fromPaymentsActions.getPayments;

export const updateFilters = fromFilterActions.updateFilters;

export const showModal = fromModalActions.showModal;

export const hideModal = fromModalActions.hideModal;

export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}