import { push } from 'connected-react-router'

const INITIAL_STATE = {
}

export const signIn = credencials => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("oi")
            dispatch(push("/"))
        }, 3000)       
    })
}

// export const auth = (state=INITIAL_STATE, action) => {
//     switch(action.type) {
//         case 'SIGN-IN':
//             return { ...state, user: action.user  }
//         default:
//             return state
//     }
// }