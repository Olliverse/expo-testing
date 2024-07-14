import React, {useEffect} from "react";
import {getAuth} from "firebase/auth";
import {router} from "expo-router";

export default function Test() {
    const auth = getAuth()

    useEffect(() => {
        if (auth.currentUser) {
            router.replace(`/user/${auth.currentUser.uid}`);
        } else {
            router.replace(`/user/logged_out`);
        }
    }, []);

    return (
        // Nothing to do here since this Component is only used for a redirect
        <></>
    );
}