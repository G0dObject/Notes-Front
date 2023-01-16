let baseName = "store";
let storeName = "notes";
function logerr(err) {
	console.log(err);
}
function connectDB(f) {
	let request = indexedDB.open(baseName, 1);
	request.onerror = logerr;
	request.onsuccess = function () {
		f(request.result);
	};
	request.onupgradeneeded = function (e) {
		let Db = e.currentTarget.result;

		if (!Db.objectStoreNames.contains(storeName)) {
			let store = Db.createObjectStore(storeName, {
				keyPath: "id",
				autoIncrement: true,
			});
		}
		connectDB(f);
	};
}

export function AddNote(obj, info) {
	info = typeof info !== "undefined" ? false : true;
	connectDB(function (db) {
		var transaction = db.transaction([storeName], "readwrite");
		var objectStore = transaction.objectStore(storeName);
		console.log(obj);
		var objectStoreRequest = objectStore.add(obj);
		objectStoreRequest.onerror = logerr;
		objectStoreRequest.onsuccess = function () {
			if (process.env.NODE_ENV === "development") {
				info
					? console.log("Rows has been added")
					: console.log("Rows has been updated");
			}
			console.info(objectStoreRequest.result);
		};
	});
}
export async function DeleteNote(id, info) {
	info = typeof info !== "undefined" ? false : true;
	connectDB(function (db) {
		var transaction = db.transaction([storeName], "readwrite");
		var objectStore = transaction.objectStore(storeName);
		var objectStoreRequest = objectStore.delete(id);
		objectStoreRequest.onerror = logerr;
		objectStoreRequest.onsuccess = function () {
			if (info) console.log("Rows has been deleted: ", id);
		};
	});
}
export async function UpdateNote(obj) {
	DeleteNote(obj.id);
	AddNote(obj);
}
export async function GetAllNotes(func) {
	connectDB(function (db) {
		var rows = [],
			store = db.transaction([storeName], "readonly").objectStore(storeName);

		if (store.mozGetAll)
			store.mozGetAll().onsuccess = function (e) {
				func(e.target.result);
			};
		else
			store.openCursor().onsuccess = function (e) {
				var cursor = e.target.result;
				if (cursor) {
					rows.push(cursor.value);
					cursor.continue();
				} else {
					func(rows);
				}
			};
	});
}
export function ReIndexBase() {
	connectDB(function (db) {
		let rows = [],
			store = db.transaction([storeName], "readwrite").objectStore(storeName);
		if (store.mozGetAll) {
			store.mozGetAll().onsuccess = function (e) {
				rows = e.target.result;
				store.clear();
				let i = 1;
				rows.map((obj) => {
					store.add({ title: obj.title, text: obj.text, id: i });
					i++;
				});
			};
		} else {
			store.openCursor().onsuccess = function (e) {
				var cursor = e.target.result;
				if (cursor) {
					rows.push(cursor.value);
					cursor.continue();
				} else {
					console.log(rows);
					store.clear();
					let i = 1;
					rows.map((obj) => {
						store.add({ title: obj.title, text: obj.text, id: i });
						i++;
					});
				}
			};
		}
	});
}
