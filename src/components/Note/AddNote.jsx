import { MDBInput } from "mdb-react-ui-kit";
import { useState, useRef, useEffect, useFocus } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

function AddNote() {
	const [isEditing, setEditing] = useState(false);
	const [visible, SetVisible] = useState(false);
	const textInput = useRef(null);

	const toggleEditing = () => {
		SetVisible(!visible);
		setEditing(!isEditing);
	};

	useEffect(() => {
		if (isEditing) {
			textInput.current.focus();
		}
	}, [isEditing]);

	return (
		<>
			<div className="addnotewrapper">
				<input
					className={!visible ? "fakelabel show" : "fakelabel hide"}
					onClick={toggleEditing}
					placeholder="Write note"
				></input>

				<div className={visible ? "addnote show" : "addnote hide"}>
					<input placeholder="Write label" className="addnotelabel"></input>
					<ReactTextareaAutosize
						placeholder="Write note"
						className="addnotetext"
						ref={textInput}
						maxRows={6}
					></ReactTextareaAutosize>
				</div>
			</div>
		</>
	);
}

export default AddNote;
