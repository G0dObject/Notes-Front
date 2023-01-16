import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { store } from "../..";
function HeaderUserSide() {
	if (store.isAuth) return User();
	else return Guest();
}

function User() {
	const navigate = useNavigate();
	return (
		<>
			<MDBBtn
				onClick={() => {
					store.logout();
					navigate("/register");
				}}
				className="mx-1  btn btn-sm"
				style={{
					background: "#5f6267",
					boxShadow: "none",
				}}
			>
				LogOut
			</MDBBtn>
		</>
	);
}
function Guest() {
	const navigate = useNavigate();
	const clickHandler = (isLogin) => {
		isLogin ? navigate("/Login") : navigate("/Register");
	};
	return (
		<>
			<MDBBtn
				onClick={() => clickHandler(true)}
				className="mx-1  btn btn-sm"
				style={{
					background: "#5f6267",
					boxShadow: "none",
				}}
			>
				Login
			</MDBBtn>

			<MDBBtn
				onClick={() => clickHandler(false)}
				className="ms-1 btn btn-sm"
				style={{
					background: "#5f6267",
					boxShadow: "none",
				}}
			>
				Register
			</MDBBtn>
		</>
	);
}

export default HeaderUserSide;
