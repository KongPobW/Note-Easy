import Note from "@/models/note";
import connectMongoDB from "@/utils/database";

export default async function handler(req, res) {

    try {

        await connectMongoDB();
        const { detail } = req.query;
        console.log(detail);

        switch (req.method) {

            case "POST":
                const date = `${detail[3]}/${detail[2]}/${detail[4]}`;
                const newNote = new Note({
                    title: detail[0],
                    content: detail[1],
                    date: date,
                    username: detail[5]
                });

                const resultPost = await newNote.save();

                if (resultPost) {
                    return res.status(200).json({ success: true });
                } else {
                    return res.status(500).json({ success: false });
                }

            case "GET":
                const username = detail[0];
                const notes = await Note.find({ username: username });
                return res.status(200).json(notes);

            case "PUT":
                const updatedDate = `${detail[4]}/${detail[3]}/${detail[5]}`;
                const resultPut = await Note.updateOne({ _id: detail[0] }, { title: detail[1], content: detail[2], date: updatedDate });

                if (resultPut.modifiedCount) {
                    return res.status(200).json({ success: true });
                } else {
                    return res.status(500).json({ success: false });
                }

            case "DELETE":
                const id = detail[0];

                const resultDelete = await Note.deleteOne({ _id: id });

                if (resultDelete) {
                    return res.status(200).json({ success: true });
                } else {
                    return res.status(500).json({ success: false });
                }

            default:
                return res.status(405).json({ error: "Method Not Allowed" });
        }

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}