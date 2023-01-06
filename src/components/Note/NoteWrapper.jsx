import NoteService from "../../services/NoteService";

function NoteWrapper({ title, text, noteid, stateChanger }) {
	console.log(stateChanger);

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
					<h4 className="noteblock__title">{title}</h4>
					<div className="noteblock__text">{text}</div>
				</div>
			</div>
		</>
	);
}

export default NoteWrapper;
