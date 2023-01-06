import Header from "../Header/Header";
import NoteService from "../../services/NoteService";
import { useEffect } from "react";
import NoteContainer from "../Note/NoteContainer";
import AddNote from "../Note/AddNote";

function IndexAuthorize() {
	return (
		<>
			<AddNote></AddNote>
			<NoteContainer></NoteContainer>
		</>
	);
}

export default IndexAuthorize;
