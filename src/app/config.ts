import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDc22isGLuEixfKF9UvXiG2bx9yhczMNNM",
  authDomain: "august-throne-401920.firebaseapp.com",
  projectId: "august-throne-401920",
  storageBucket: "august-throne-401920.appspot.com",
  messagingSenderId: "752850717401",
  appId: "1:752850717401:web:3c4421a38177b3e43cccc8",
  measurementId: "G-45YQE8MF2Y"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);