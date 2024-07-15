import { initializeApp } from "firebase/app"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {initializeAuth, getReactNativePersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});