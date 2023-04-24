import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"

export const firebaseConfig = {
    apiKey: "AIzaSyCKN5ASYTZFu8JIi2ZLJLEPO51fC_jeeKs",
    authDomain: "alonbalon-49451.firebaseapp.com",
    projectId: "alonbalon-49451",
    storageBucket: "alonbalon-49451.appspot.com",
    messagingSenderId: "653614459439",
    appId: "1:653614459439:web:617c7abfd4701ccc6774da"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)