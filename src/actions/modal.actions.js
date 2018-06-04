export function showModal(payment) {
    return {
        type: 'SHOW_MODAL',
        payload:{payment:payment}
    };
}

export function hideModal(){
    return {
        type: 'HIDE_MODAL',
    }
}