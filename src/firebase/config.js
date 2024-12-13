
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzH61EijdsrWsPwg8acttyY1JGKkB5Cx4",
  authDomain: "ecommerce-pcservice.firebaseapp.com",
  projectId: "ecommerce-pcservice",
  storageBucket: "ecommerce-pcservice.firebasestorage.app",
  messagingSenderId: "324520128203",
  appId: "1:324520128203:web:6a4954244a47d9631ab54e"
};


export const app = initializeApp(firebaseConfig);