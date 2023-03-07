const intialState={
    data:[]
}

export const reducer = (state=intialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "DATA_UPLOAD":

            return {...state,data:[...state.data,payload]};
        default:return {...state}
    }
}