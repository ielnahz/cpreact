var def = {
    lottery: [],
    lotteryJson: {},
    homeinfo: {},
    userinfo: {}
};

function homeReducer(state=def,action){
    switch (action.type){
        case 'homestart':
            return {...state};
        case 'homesuccess':
            return {...state, homeinfo: action.data, lottery: action.lottery, lotteryJson: action.lotteryJson, userinfo:action.userinfo};
        case 'homeerror':
            return {...state};
    }
    return state;
}

export default homeReducer;