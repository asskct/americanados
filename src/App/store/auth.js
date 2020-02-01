import { push } from 'connected-react-router'

export function signIn(credencials) {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()       

        firebase.auth()
        .signInWithEmailAndPassword(
            credencials.email,
            credencials.password
        )
        .then(user => {
            dispatch(push("/"))
        })
        .catch(err => {            
            console.log(getState(), err)
        })
    } 
} 
