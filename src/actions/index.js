import * as fromFilterActions from './filters.actions';
import * as fromPaymentsActions from './payments.actions';

export const resetFilters = fromFilterActions.resetFilters;

export const getPayments = fromPaymentsActions.getPayments;

export const updateFilters = fromFilterActions.updateFilters;

export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}