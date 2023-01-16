import { useEffect, useState } from "react";
import NoteService from "../../services/NoteService";
import AddNote from "./AddNote";
import NoteWrapper from "./NoteWrapper";
import * as db from "../../DatabaseWorker";

function NoteContainer() {
	const [notes, setNotes] = useState([]);
	useEffect(()=>{GetData()},[])
async function GetData ()  {
		await db.GetAllNotes(function (response) {
			setNotes(response);
		});
		let response = await NoteService.get();
		setNotes(response.data);
	};

	return (
		<>
			<AddNote stateChanger={GetData}></AddNote>
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
