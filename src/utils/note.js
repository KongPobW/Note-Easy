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
}

export default NoteManager;