
var def = {
    homeinfo: {}
};

function homeReducer(state=def,action){
    switch (action.type){
        case 'homestart':
            return {...state};
        case 'homesuccess':
            return {...state, homeinfo: action.data};
        case 'homeerror':
            return {...state};
    }
    return state;
}

export default homeReducer;