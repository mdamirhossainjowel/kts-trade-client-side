import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYSR-AWYH0eNNenKTA-kC1fuD9rxssdAo",
  authDomain: "ktstrade.firebaseapp.com",
  projectId: "ktstrade",
  storageBucket: "ktstrade.appspot.com",
  messagingSenderId: "248537521948",
  appId: "1:248537521948:web:32408cf13f6f8f08be64d9",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
