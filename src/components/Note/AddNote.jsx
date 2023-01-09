import { useState, useRef, useEffect } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import NoteService from "../../services/NoteService";
import useOnClickOutside from "use-onclickoutside";

function AddNote({ stateChanger }) {
	const [isEditing, setEditing] = useState(false);

	const titleref = useRef("");
	const textref = useRef("");

	const ref = useRef();
	useOnClickOutside(ref, () => {
		if (isEditing) {
			SendNote();
			titleref.current.value = "";
			textref.current.value = "";
			toggleEditing();
		}
	});

	const toggleEditing = () => {
		setEditing(!isEditing);
	};

	function SendNote() {
		NoteService.post(titleref.current.value, textref.current.value).then(() =>
			stateChanger()
		);
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
