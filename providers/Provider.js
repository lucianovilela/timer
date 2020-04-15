import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxd4H8o1ihfgeWpym6RnrmLY2-8yMSWzE",
  authDomain: "pesquisa-fbda8.firebaseapp.com",
  databaseURL: "https://pesquisa-fbda8.firebaseio.com",
  projectId: "pesquisa-fbda8",
  storageBucket: "pesquisa-fbda8.appspot.com",
  messagingSenderId: "384123874840",
  appId: "1:384123874840:web:fecddbb4c0177b2024dd6d",
};

export default class Provider {
  constructor(PATH) {
    if(!Provider.app){
      Provider.app=firebase
      .initializeApp(firebaseConfig, "pesquisa");
    }
    if (!Provider.db) {
      
       Provider.db= Provider.app.firestore();
    }
    this.PATH = PATH;
  }

  async getAll(limit = 50, filter = null) {
    return await Provider.db
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
      return Provider.db
        .collection(this.PATH)
        .doc(obj.key)
        .update({
          dataUpdate: firebase.firestore.Timestamp.fromDate(new Date()),
          ...obj,
        })
        .then(() => obj);
    } else {
      return Provider.db
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
      return Provider.db
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
   // return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  currentUser() {
   // return firebase.auth().currentUser;
  }

  signupUser(email, password) {
    /* return firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        Provider.db
        .collection("userProfile")
          .set({ email: email });
      }); */
  }
  resetPassword(email) {
/*     return firebase.auth().sendPasswordResetEmail(email);
 */  }
  logoutUser() {
/*     return firebase.auth().signOut();
 */  }
}
