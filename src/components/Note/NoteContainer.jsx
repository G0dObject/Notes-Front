import { useEffect, useState } from "react";
import NoteService from "../../services/NoteService";
import NoteWrapper from "./NoteWrapper";

function NoteContainer() {
	const [notes, setNotes] = useState([]);

	useEffect(() => GetData(), []);

	function GetData() {
		NoteService.get().then((response) => {
			setNotes(response.data);
		});
	}

	return (
		<>
			<div className="notecontainer">
				{notes.map((item) => (
					<NoteWrapper
						key={item.id}
						{...item}
						stateChanger={GetData}
						noteid={notes.indexOf(item)}
					/>
				))}
			</div>
		</>
	);
}

export default NoteContainer;
