const init = {
  id: "",
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  address: [],
  users: [],
  error: "",
  success: ""
};

export default (state = init, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email
      };

    case "EDIT_USERSUCCESS":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        password: action.payload.password,
      };

    case "EDIT_ADDRESSSUCCESS":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        password: action.payload.password,
      };

    case "EDIT_USERDATA":
    console.log(action.payload.data);
    
      return {
        ...state,
        users: action.payload.data
      }
      
    case "EDIT_USERADDRESS":
    console.log(action.payload.data);
    
      return {
        ...state,
        address: action.payload.data
      }

    case "LOGOUT":
      return {
        ...state,
        id: "",
        username: "",
        first_name: "",
        last_name: "",
        email: ""
      };

    case "KEEP_LOGIN":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.name,
        first_name: action.payload.name,
        last_name: action.payload.name,
        email: action.payload.email
      };

    case "AUTH_ERROR":
      return { ...state, error: action.payload, success: "" };

    case "AUTH_SUCCESS":
      return { ...state, error: "", success: action.payload };

    case "SET_TIMEOUT":
      return { ...state, error: "", success: "" };

    case "AUTH_LOGOUT":
      return (state = init);

    case 'ADD_PROD_SUCCESS':
      return{...state,error:'', success:action.payload}

    case 'ADD_PROD_ERROR':
      return{...state,error:action.payload, success:''}
    
            default:
      return state;
  }
};
