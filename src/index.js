import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React, { createContext } from "react";
import style from "./scss/app.scss";
import Store from "./store/store";
import { data } from "autoprefixer";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const store = new Store();
export const Context = createContext(store);

console.log(process.env.REACT_APP_BASE_API_URL);

root.render(
	<BrowserRouter>
		<Context.Provider value={store}>
			<App />
		</Context.Provider>
	</BrowserRouter>
);
