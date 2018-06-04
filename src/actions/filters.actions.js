export function resetFilters() {
    return {
        type: 'RESET_FILTERS',
    };
}

export function updateFilters(filters){
    return {
        type: 'UPDATE_FILTERS',
        payload:filters
    }
}