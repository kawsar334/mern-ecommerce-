import { configureStore } from "@reduxjs/toolkit"

import userRedux from "./AuthRedux";


    
    export const store = configureStore({
        reducer: {
            auth:userRedux

    },
})