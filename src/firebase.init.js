// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHmB1N7BVSz6hckbHBwUtJY5zQNGArZo",
  authDomain: "genius-car-services-32239.firebaseapp.com",
  projectId: "genius-car-services-32239",
  storageBucket: "genius-car-services-32239.appspot.com",
  messagingSenderId: "786328776052",
  appId: "1:786328776052:web:48c258480346fccd9b1021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;