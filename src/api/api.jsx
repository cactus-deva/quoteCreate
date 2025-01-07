
import axios from "axios";

export default async function RandomQuoteApi() {
    try {
        const response = await axios.get(`https://programming-quotesapi.vercel.app/api/random`, {
            headers: {
                "X-Api-Key": "JvnKGeys/PRJzr4UCoCY8w==hqaGWhynzaagoG60"
            },
            contentType: 'application/json'
        })
        return response.data
    } catch (error) {
        console.log("Error found >>", error);
    }
}
