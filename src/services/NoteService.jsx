import $api from "../http";

export default class NoteService {
	static async get() {
		return await $api.get("notes");
	}
	static async delete(noteid) {
		return await $api.delete(`notes`, { data: { noteid } });
	}
	static async post(title, text) {
		return await $api.post(`notes`, { title, text });
	}
}
