// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';

export const environment = {
  
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBQepJk7JMVLjdd4xoynG6zAbhdNH1rDVE",
    authDomain: "cv-2022-b75f5.firebaseapp.com",
    projectId: "cv-2022-b75f5",
    storageBucket: "cv-2022-b75f5.appspot.com",
    messagingSenderId: "456222256345",
    appId: "1:456222256345:web:d88428d1f254a1e672a2c8",
    measurementId: "G-1F82Q8EL1X"
  }
};

const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
