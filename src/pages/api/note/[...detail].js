import Note from "@/models/note";
import connectMongoDB from "@/utils/database";

export default async function handler(req, res) {

    try {

        await connectMongoDB();
        const { detail } = req.query;
        console.log(detail);

        switch (req.method) {

            case "GET":
                const username = detail[0];
                const notes = await Note.find({ username: username }).sort({ date: 1 });
                return res.status(200).json(notes);

            default:
                return res.status(405).json({ error: "Method Not Allowed" });
        }

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}