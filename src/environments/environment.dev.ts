// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `index.ts`, but if you do
// `ng build --env=prod` then `index.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const AppConfig = {
  production: false,
  environment: 'DEV',
  firebase: {
    apiKey: 'AIzaSyCshTiNr7nR9o_PY41tUgv8A0Ud5TG6gyE',
    authDomain: 'oxford3000-f1f66.firebaseapp.com',
    databaseURL: 'https://oxford3000-f1f66.firebaseio.com',
    projectId: 'oxford3000-f1f66',
    storageBucket: 'oxford3000-f1f66.appspot.com',
    messagingSenderId: '991851507553',
    appId: '1:991851507553:web:dbf6553c5df1162ffcdf20',
    measurementId: 'G-B8R2G1FT1C'
  }
};
