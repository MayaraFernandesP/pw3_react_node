import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkeRsRwl0iQsnyc_nfQ6Ba-b01-_s4yZ0",
  authDomain: "miniblog-may.firebaseapp.com",
  projectId: "miniblog-may",
  storageBucket: "miniblog-may.appspot.com",
  messagingSenderId: "628965617573",
  appId: "1:628965617573:web:58d613542f2972f0dd824c",
  measurementId: "G-528GGMHP43"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);