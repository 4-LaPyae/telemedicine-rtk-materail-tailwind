import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Router from "./routes";
import LoaderProvider from "./components/loader";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <Provider store={store}>
            <LoaderProvider>
                <Router />
            </LoaderProvider>
        </Provider>
    </ThemeProvider>,
);
