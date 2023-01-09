import NoteService from "../../services/NoteService";
import ReactTextareaAutosize from "react-textarea-autosize";
import { MDBBtn } from "mdb-react-ui-kit";

function NoteWrapper({ title, text, noteid, stateChanger }) {
	return (
		<>
			<div className="notewrapper">
				<button
					className="closebutton"
					onClick={() => {
						NoteService.delete(noteid).then(() => stateChanger());
					}}
				>
					✖
				</button>
				<div className="noteblock">
					<ReactTextareaAutosize className="noteblock__title" readOnly={true}>
						{title}
					</ReactTextareaAutosize>
					<ReactTextareaAutosize className="noteblock__text" readOnly={true}>
						{text}
					</ReactTextareaAutosize>
				</div>
			</div>
		</>
	);
}

export default NoteWrapper;
