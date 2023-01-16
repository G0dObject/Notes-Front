import NoteService from "../../services/NoteService";
import ReactTextareaAutosize from "react-textarea-autosize";
import * as db from "../../DatabaseWorker";
import NoteMenu from "./NoteMenu";

function NoteWrapper({ title, text, noteid, stateChanger }) {
	db.ReIndexBase();

	async function UpdateNote(obj) {
		db.UpdateNote(obj).then(() => stateChanger());
	}

	async function DeleteNote(noteid) {
		db.DeleteNote(noteid + 1).then(() => stateChanger());
		//await NoteService.delete(noteid);
	}
	return (
		<>
			<div className="notewrapper">
				{
					<div className="closebuttonwrapper">
						<button className="closebutton" onClick={() => DeleteNote(noteid)}>
							✖
						</button>
					</div>
				}
				<div className="noteblock">
					<ReactTextareaAutosize className="noteblock__title" readOnly={true}>
						{title}
					</ReactTextareaAutosize>
					<ReactTextareaAutosize className="noteblock__text" readOnly={true}>
						{text}
					</ReactTextareaAutosize>
					<NoteMenu
						noteid={noteid}
						deleteCallBack={DeleteNote}
						updateCallBack={UpdateNote}
						className="noteblock__menu"
					></NoteMenu>
				</div>
			</div>
		</>
	);
}

export default NoteWrapper;
