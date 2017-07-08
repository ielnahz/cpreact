var def = {
    userinfo: {}
};

function loginReducer(state=def,action){
    switch (action.type){
        case 'loginstart':
            return {...state};
        case 'loginsuccess':
            return {...state, userinfo: action.data};
        case 'loginerror':
            return {...state};
    }
    return state;
}

export default loginReducer;