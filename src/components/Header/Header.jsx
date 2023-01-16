import React, { useState } from "react";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarItem,
	MDBBtn,
} from "mdb-react-ui-kit";
import HeaderUserSide from "./HeaderUserSide";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const [ShowNavExternal, setShowNavExternal] = useState(false);

	return (
		<>
			<MDBNavbar dark id="header__navbar">
				<MDBContainer fluid>
					<MDBNavbarToggler
						type="button"
						data-target="#navbarToggleExternalContent"
						aria-controls="navbarToggleExternalContent"
						aria-expanded="true"
						aria-label="Toggle navigation"
						onClick={() => setShowNavExternal(!ShowNavExternal)}
					>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler>
					<MDBNavbarBrand style={{ marginLeft: "0" }} r className="text-light ">
						<MDBBtn
							onClick={() => {
								navigate("/");
							}}
							rippleDuration={0}
							className="headerCenterBtn"
							style={{
								background: "none",
								boxShadow: "none",
							}}
						>
							Notes
						</MDBBtn>
					</MDBNavbarBrand>
					<MDBNavbarItem className="text-light">
						<HeaderUserSide></HeaderUserSide>
					</MDBNavbarItem>
				</MDBContainer>
			</MDBNavbar>
			<Collapse in={ShowNavExternal} dimension="width">
				<div id="navbarToggleExternalContent" style={{ display: "flex-box" }}>
					<Card>In develop</Card>
				</div>
			</Collapse>
		</>
	);
}
export default Header;
