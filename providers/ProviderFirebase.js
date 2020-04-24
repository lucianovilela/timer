import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxd4H8o1ihfgeWpym6RnrmLY2-8yMSWzE",
  authDomain: "pesquisa-fbda8.firebaseapp.com",
  databaseURL: "https://pesquisa-fbda8.firebaseio.com",
  projectId: "pesquisa-fbda8",
  storageBucket: "pesquisa-fbda8.appspot.com",
  messagingSenderId: "384123874840",
  appId: "1:384123874840:web:fecddbb4c0177b2024dd6d",
};



export default class ProviderFirebase {
  constructor() {
      console.debug(firebase.length);
  }
  static getInstance(PATH){

    if(!ProviderFirebase.instance){
      ProviderFirebase.instance = new ProviderFirebase();
      ProviderFirebase.instance.app =firebase.initializeApp(firebaseConfig, "pesquisa"); 
      ProviderFirebase.instance.db = ProviderFirebase.instance.app.firestore();
      ProviderFirebase.instance.auth = ProviderFirebase.instance.app.auth();
      ProviderFirebase.instance.PATH = PATH;
    }
    return ProviderFirebase.instance;
  }

  async getAll(limit = 50, filter = null) {
    return await this.db
      .collection(this.PATH)
      .limit(limit)
      .get()
      .then((r) => {
        let result = [];
        r.forEach((doc) => result.push({ key: doc.id, ...doc.data() }));
        return result;
      });
  }

  save(obj) {
    if (obj.key) {
      return this.db
        .collection(this.PATH)
        .doc(obj.key)
        .update({
          dataUpdate: firebase.firestore.Timestamp.fromDate(new Date()),
          ...obj,
        })
        .then(() => obj);
    } else {
      return this.db
        .collection(this.PATH)
        .add({
          dataUpdate: firebase.firestore.Timestamp.fromDate(new Date()),
          ...obj,
        })
        .then((doc) => doc);
    }
  }
  delete(obj) {
    if (!obj.key) {
      throw "Item não existe";
    } else {
      return this.db
        .collection(this.PATH)
        .doc(obj.key)
        .delete({
          dataUpdate: firebase.firestore.Timestamp.fromDate(new Date()),
          ...obj,
        })
        .then(() => obj);
    }
  }

  /*
  remove(key: string) {
    return Provider.db.list(this.PATH).remove(key);
  }
*/
  loginUser(email, password) {
   return ProviderFirebase.instance.auth.signInWithEmailAndPassword(email, password);
  }
  logonUser(email, password) {
    return ProviderFirebase.instance.auth.createUserWithEmailAndPassword(email, password);
   }
 
  currentUser() {
   return ProviderFirebase.instance.auth.currentUser;
  }

  
  resetPassword(email) {
     return ProviderFirebase.instance.auth.sendPasswordResetEmail(email);
   }
  logoutUser() {
     return ProviderFirebase.instance.auth.signOut();
   }
}
