import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import logo from "./logo.svg";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route index element={<IndexPage />}></Route>
				<Route path="/Login" element={<LoginPage />}></Route>
				<Route path="/Register" element={<RegisterPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
