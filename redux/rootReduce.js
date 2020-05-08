import { combineReducers } from 'redux'

const auth  = (state = {user:{}, logado:false}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return ({user:action.user, logado:true});
            
        case 'LOGOUT':
        return ({user:{}, logado:false});
      default:
        return state
    }
  }
  
const rootReduce  = combineReducers({auth});

export default rootReduce;