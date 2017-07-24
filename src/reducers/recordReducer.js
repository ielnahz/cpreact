var def = {
    recordList: []
};

function recordReducer(state=def,action){
    switch (action.type){
        case 'recordstart':
            return {...state};
        case 'recordsuccess':
            return {...state, recordList: action.data};
        case 'recorderror':
            return {...state};
    }
    return state;
}

export default recordReducer;