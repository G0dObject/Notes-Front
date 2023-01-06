import $api from "../http";

export default class NoteService {
	static async get() {
		return await $api.get("/notes");
	}
	static async delete(noteid) {
		return await $api.delete(`/notes`, { noteid });
	}
}
