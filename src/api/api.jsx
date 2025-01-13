
import axios from "axios";

export default async function RandomQuoteApi() {
    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/quotes`, {
            headers: {"X-Api-Key" : "JvnKGeys/PRJzr4UCoCY8w==hqaGWhynzaagoG60"},
            contenType: "application/json"
        })        
        return response.data
    } catch (error) {
        console.log("Error found >>", error);
    }
}
