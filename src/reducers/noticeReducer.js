var def = {
    noticeList: []
};

function noticeReducer(state=def,action){
    switch (action.type){
        case 'noticestart':
            return {...state};
        case 'noticesuccess':
            return {...state, noticeList: action.data};
        case 'noticeerror':
            return {...state};
    }
    return state;
}

export default noticeReducer;