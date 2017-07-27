var def = {
    betData: {}
};

function betReducer(state=def,action){
    switch (action.type){
        case 'betstart':
            return {...state};
        case 'betsuccess':
            return {...state, betData: action.data};
        case 'beterror':
            return {...state};
    }
    return state;
}

export default betReducer;