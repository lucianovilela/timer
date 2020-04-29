import  * as firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyDxd4H8o1ihfgeWpym6RnrmLY2-8yMSWzE",
  authDomain: "pesquisa-fbda8.firebaseapp.com",
  databaseURL: "https://pesquisa-fbda8.firebaseio.com",
  projectId: "pesquisa-fbda8",
  storageBucket: "pesquisa-fbda8.appspot.com",
  messagingSenderId: "384123874840",
  appId: "1:384123874840:web:fecddbb4c0177b2024dd6d",
};
const app = firebase.initializeApp(firebaseConfig,"pesquisa");

export default class ProviderFirebase {
  constructor(PATH) {
    const init= async ()=>{
      this.auth = app.auth();
      await this.auth.setPersistence(this.auth.LOCAL);
      this.firestore = app.firestore();
      this.PATH = PATH;
    };
    init();
  }

  async getAll(limit = 50, filter = null) {
    return await this.firestore
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
      return this.firestore
        .collection(this.PATH)
        .doc(obj.key)
        .update({
          dataUpdate: firebase.firestore.Timestamp.fromDate(new Date()),
          ...obj,
        })
        .then(() => obj);
    } else {
      return this.firestore
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
      return this.firestore
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
  async loginUser(email, password) {
    return this.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }
  logonUser(email, password) {
    return this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  currentUser() {
    return this._parseUser(this.auth.currentUser);
  }

  async validToken(token) {
    // idToken comes from the client app
    return await this.auth.verifyIdToken(token);
  }

  async getToken() {
    const tokenResult = await this.auth.currentUser.getIdToken();
    return tokenResult;
  }
  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
  logoutUser() {
    return this.auth.signOut();
  }

  onLoginChange(cb){
    
    this.auth.onAuthStateChanged((user)=>{
      cb(user);
    });
  }

  _parseUser(user) {
    return {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      metadata: user.metadata,
      multiFactor: user.multiFactor,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerData: user.providerData,
      providerId: user.providerId,
      refreshToken: user.refreshToken,
      tenantId: user.tenantId,
      uid: user.uid,
    };
  }
}
