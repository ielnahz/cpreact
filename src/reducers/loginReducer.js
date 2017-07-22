var def = {
    userinfo: {},
    loginstate: false,
    errormsg: ''
};

function loginReducer(state=def,action){
    switch (action.type){
        case 'loginstart':
            return {...state};
        case 'loginsuccess':
            return {...state, userinfo: action.data, loginstate: true, errormsg:''};
        case 'loginfail':
            return {...state, errormsg: action.data, loginstate: false};
        case 'loginerror':
            return {...state};
    }
    return state;
}

export default loginReducer;