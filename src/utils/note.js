import { getCurrentDate } from "./date";

class NoteManager {

    static async getNotes(username) {
        if (!username) {
            throw new Error("username is undefined");
        }

        const res = await fetch(`/api/note/${username}`, {
            method: "GET"
        });

        if (res.ok) {
            return await res.json();
        } else {
            return null;
        }
    }

    static async add(title, content, username) {
        if (!title || !content || !username) {
            throw new Error("title, content, and username are undefined");
        }

        const result = await fetch(`/api/note/${title}/${content}/${getCurrentDate()}/${username}`, {
            method: "POST"
        });

        if (result.ok) {
            return true;
        } else {
            return false;
        }
    }

    static async edit(id, title, content) {
        if (!id || !title || !content) {
            throw new Error("id, title, and content are undefined");
        }

        const result = await fetch(`/api/note/${id}/${title}/${content}/${getCurrentDate()}`, {
            method: "PUT"
        });

        if (result.ok) {
            return true;
        } else {
            return false;
        }
    }

    static async delete(id) {
        if (!id) {
            throw new Error("id is undefined");
        }

        const result = await fetch(`/api/note/${id}`, {
            method: "DELETE"
        });

        if (result.ok) {
            return true;
        } else {
            return false;
        }
    }
}

export default NoteManager;