export const initialState = {
    user: null,
}

export const actionType = {
    SET_USER: "SET_USER",
};

const reducer = ( state, action ) => {
    console.log(action);
    switch(action.type) {
        case actionType.SET_USER:  // if you receive actionType.SET_USER 
         return{                   // then return 
             ...state,             // return every currents you looks like
             user: action.user,    // with new update whatever we passed in user payload
         };

       default:                    // and if don't
         return state;  
    }
};
  
export default reducer;
