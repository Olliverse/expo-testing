import React from 'react';
import AppContainer from "./app";
import {CurrentPageProvider} from "./components/context/PageContext";


// This entrypoint is NOT USED since expo router has his own entrypoint...
// TODO: check how to use Providers with router... there must be a way to inject
function App(){
    return (
        <CurrentPageProvider>
            <AppContainer />
        </CurrentPageProvider>
    );
}