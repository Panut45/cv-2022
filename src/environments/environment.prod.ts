import { initializeApp } from "firebase/app";

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCp1YsCPjwTDCOZWJYbfDs_7Vv2V4shfKw",
    authDomain: "cv-2022-f7390.firebaseapp.com",
    projectId: "cv-2022-f7390",
    storageBucket: "cv-2022-f7390.appspot.com",
    messagingSenderId: "270485320446",
    appId: "1:270485320446:web:6e15819a87284af1d52baf",
    measurementId: "G-SPE28312RD"
  }
};

const app = initializeApp(environment.firebaseConfig);