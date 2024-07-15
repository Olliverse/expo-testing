import {initializeApp} from "firebase/app"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getReactNativePersistence, initializeAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDh6kOP1_kcslbos6TPNwIV9NNCQkjx4r4",
    authDomain: "expo-testing-692aa.firebaseapp.com",
    projectId: "expo-testing-692aa",
    storageBucket: "expo-testing-692aa.appspot.com",
    messagingSenderId: "595842757136",
    appId: "1:595842757136:web:1dc20d3058f1fbe0af5095",
    measurementId: "G-JQ1LS0WHT5",
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});