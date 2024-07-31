import {initializeApp} from "firebase/app"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getReactNativePersistence, initializeAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import firebaseSecrets from "./secrets/firebaseSecrets";

const app = initializeApp(firebaseSecrets);

initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);

export {app, db};