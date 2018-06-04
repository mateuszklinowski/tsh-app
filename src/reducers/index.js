import {fromJS} from 'immutable';

const setState = (state, newState) => state.merge(newState);

const initialState = fromJS({
    payments: [],
    filters: {
        page: '',
        query: '',
        rating: ''
    },
    pagination: {
        current: "",
        from: 0,
        left: false,
        leftEnd:false,
        right:true,
        rightEnd:true,
        to:9,
        total:50
    },
    app: {
        loading: false,
        requestError: false,
    },
    modal:{
        show:false,
        payment:{
            payment_supplier:"",
            payment_ref:"",
            payment_cost_rating:"",
            payment_amount:""
        }
    }
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'REQUEST_PAYMENTS':
            return state.merge(fromJS({
                app: {
                    loading: true,
                    requestError: false,
                }
            }));
        case 'REQUEST_PAYMENTS_SUCCESS':
            return fromJS({
                ...state.toJS(),
                app: {
                    loading: false,
                    requestError: false,
                },
                payments:action.payload.payments,
                pagination:action.payload.pagination
            });
        case 'REQUEST_PAYMENTS_FAIL':
            return state.mergeDeep(fromJS({
                app: {
                    loading: false,
                    requestError: true,
                },
            })).set('payments',fromJS([]));
        case 'RESET_FILTERS':
            return state.set('filters',fromJS({
                page: '',
                query: '',
                rating: ''
            }));
        case 'UPDATE_FILTERS':
            return state.mergeDeep(fromJS({
                filters: action.payload
            }));
        case 'HIDE_MODAL':
            return state.mergeDeep(fromJS({
                modal:{
                    show:false
                }
            }));

        case 'SHOW_MODAL':
            return state.mergeDeep(fromJS({
                modal:{
                    show:true,
                    payment:{
                        ...action.payload.payment
                    }
                }
            }));
        default :
            return state
    }
}