import firebase from 'firebase/app'
import credentials from './credentials'

export const App = firebase.initializeApp(credentials.config)