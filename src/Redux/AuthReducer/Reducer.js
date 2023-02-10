import * as types from "./ActionTypes";

const initialState={
  isAuth:JSON.parse(localStorage.getItem("isAuth"))||false,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type }) => {


  switch (type) {

//...................................LOGIN_REQUEST

    case types.GET_LOGIN_REQUEST:
      return { 
        ...state,
        isLoading: true
       };

//...................................


//...................................LOGIN_SUCCESS

    case types.GET_LOGIN_SUCCESS:

    localStorage.setItem("isAuth",true)

      return { 
        ...state,
         isLoading: false,
          isAuth: true  
        };
    
//...................................
case types.GET_LOGOUT_SUCCESS:
  localStorage.setItem("isAuth",false)

  return { 
    ...state,
     isLoading: false,
      isAuth: false  
    };


//...................................LOGIN_FAILURE

    case types.GET_LOGIN_FAILURE:
      return {
         ...state,
          isLoading: false,
           isError: true 
        };
    
//...................................


//...................................default case       
   default:
      return state;

//   ..................      
  
     }


};

export {reducer };