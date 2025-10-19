import {} from "express";
import axios from "axios";
export const userDetails = {
    name: "Dongo Cornelius",
    email: "dongoorinami@gmail.com",
    stack: "Node.js/Express",
};
export const fetchUser = async (req, res) => {
    try {
        let catFact = "Could not fetch a cat fact";
        const response = await axios.get("https://catfact.ninja/fact", {
            timeout: 5000,
        });
        if (!response) {
            return res
                .status(400)
                .json({ success: false, messsage: "Incorrect URL" });
        }
        catFact = response.data.fact;
        console.log(catFact);
        return res.status(200).json({
            status: "success",
            user: {
                email: userDetails.email,
                name: userDetails.name,
                stack: userDetails.stack,
            },
            timeStamp: new Date().toISOString(),
            fact: catFact,
        });
    }
    catch (error) {
        if (error.message === "Could not fetch a cat fact") {
            return res.status(400).json({ success: false, message: error.message });
        }
        else {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};
//# sourceMappingURL=user.controller.js.map