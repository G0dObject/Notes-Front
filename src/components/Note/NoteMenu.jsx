import { MDBIcon } from "mdbreact";
import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
function NoteMenu({ updateCallBack, deleteCallBack, noteid }) {
	const ref = useRef();
	const [isVisible, SetVisile] = useState(false);

	useOnClickOutside(ref, () => {
		SetVisile(false);
	});
	return (
		<>
			<div className="noteblock__menu">
				<MDBIcon
					onClick={() => {
						SetVisile(!isVisible);
					}}
					fas
					icon="ellipsis-v"
				>
					<div
						ref={ref}
						className={
							isVisible
								? "notemenu__list__panel show"
								: "notemenu__list__panel hide"
						}
					>
						<ul>
							<li
								onClick={() => {
									deleteCallBack(noteid);
								}}
							>
								Удалить заметку
							</li>
							<li
								onClick={() =>
									updateCallBack({ id: noteid + 1, title: "upt", text: "upt" })
								}
							>
								Изменить заметку
							</li>{" "}
							<li>Создать копию</li>
						</ul>
					</div>
				</MDBIcon>
			</div>
		</>
	);
}

export default NoteMenu;
