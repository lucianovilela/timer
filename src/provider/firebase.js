import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/'
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);


export const logout=()=>{
    return firebase.auth().logout();
}


export const loginPorEmail=({email})=>{
    return  firebase.auth().sendSignInLinkToEmail(email)
            .then((result)=>(result));
 }
 
export const createUser=({email, password})=>{
   return  firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const loginEmail=({email, password})=>{
    return  firebase.auth().signInWithEmailAndPassword(email, password);
 }

 export const loginGoogle=()=>{
     return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }

 export const loginFacebook=()=>{
    return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
}

export const passwordRecovery=({email})=>{
    return firebase.auth().sendPasswordResetEmail(email);
}

export const onChangeUser=(observer)=>{
    if(typeof observer === "function" ){
        return firebase.auth().onAuthStateChanged(observer);
    }
};