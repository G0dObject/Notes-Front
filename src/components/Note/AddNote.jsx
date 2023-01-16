import { useState, useRef, useEffect } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import NoteService from "../../services/NoteService";
import useOnClickOutside from "use-onclickoutside";
import * as db from "../../DatabaseWorker";

function AddNote({ stateChanger }) {
	const [isEditing, setEditing] = useState(false);

	const titleref = useRef("");
	const textref = useRef("");
	const ref = useRef();

	function IsFieldEmpty() {
		if (
			(titleref.current.value.trim().length < 1) &
			(textref.current.value.trim().length < 1)
		)
			return true;
		else return false;
	}

	useOnClickOutside(ref, () => {
		if (isEditing) {
			let _ = !IsFieldEmpty() ? SendNote() : null;
			titleref.current.value = "";
			textref.current.value = "";
			toggleEditing();
		}
	});

	const toggleEditing = () => {
		setEditing(!isEditing);
	};

	function SendNote() {
		let title = titleref.current.value;
		let text = textref.current.value;
		db.AddNote({ title: title, text: text });
		stateChanger();
		NoteService.post(title, text).then(() => stateChanger());
	}
	useEffect(() => {
		if (isEditing) {
			textref.current.focus();
		}
	}, [isEditing]);

	return (
		<>
			<div className="addnotewrapper" ref={ref}>
				<input
					className={!isEditing ? "fakelabel show" : "fakelabel hide"}
					onClick={toggleEditing}
					placeholder="Write note"
				></input>

				<div className={isEditing ? "addnote show" : "addnote hide"}>
					<input
						ref={titleref}
						placeholder="Write label"
						className="addnotelabel"
					></input>
					<ReactTextareaAutosize
						placeholder="Write note"
						className="addnotetext"
						ref={textref}
						maxRows={6}
					></ReactTextareaAutosize>
				</div>
			</div>
		</>
	);
}

export default AddNote;
