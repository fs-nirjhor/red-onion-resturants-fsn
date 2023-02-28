import { initializeApp } from "firebase/app";


export const firebaseConfig = {
  apiKey: "AIzaSyAzLXerokQtVpXAYAvzn9ER8xs6sD-tUyM",
  authDomain: "red-onion-resturants-fsn.firebaseapp.com",
  projectId: "red-onion-resturants-fsn",
  storageBucket: "red-onion-resturants-fsn.appspot.com",
  messagingSenderId: "894242151409",
  appId: "1:894242151409:web:97f6ff9d4f57137d574250",
  measurementId: "G-C1CGJ0306J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default app;


