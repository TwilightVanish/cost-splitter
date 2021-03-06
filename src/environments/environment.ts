// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  redirectUrl: 'http://localhost:4200',
  firebase: {
    projectId: 'jados-cost-splitter',
    appId: '1:131791264113:web:ecaa2521f0862503dfbed0',
    storageBucket: 'jados-cost-splitter.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyD7zMqr1iMHTlM6JCE88Tf7u_UvliH0fFA',
    authDomain: 'jados-cost-splitter.firebaseapp.com',
    messagingSenderId: '131791264113',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
