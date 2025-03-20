require("dotenv").config();
const axios = require("axios");

// Function to choose AI Model based on message type

const getModel = (message) => {
    if (message.toLowerCase().includes("code") || message.toLowerCase().includes("programming")) {
        return "mistralai/mistral-7b-instruct";
    }else if(message.tolowerCase().includes("story") || message.tolowerCase().includes("write")) {
        return "anthropic/claude-v1"; //best fot writing & cretive works
    }else{
        return "meta/llma-2-13b-chat"; //general AI chat
    }
};

//Function to send message to AI and get response

const sendMessageToAI= async (message) => {
    try {
        const model = getModel(message); //choose the model based on the query
        console.log(`using model: ${model}`);

        const response = await axios.post(
            process.env.AI_API_URL,
            {
                model: model,
                messages: [{role: "user", content: message}],
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.AI_API_KEY}`,
                    "Content-type": "application/json",
                },
            
            }
       
        );
        return response.data.choices[0].message.content;
        
    }catch(error){
        console.error("AI API Error", error.response?.data || error.message);
        return "Sorry, I am not able to understand that";
    }
};

module.exports = sendMessageToAI;

