import { loader } from "./loaderreducer.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        loaders: loader.reducer
    },
});

export default store;