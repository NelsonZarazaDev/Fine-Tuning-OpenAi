const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"});
const openai = new OpenAIApi(configuration);

async function GetMessage(message) {
  try {
    const response = await openai.createCompletion({
      model: "ft:davinci-002:ufpso::9UCbi6aN", //Output model
      prompt: message,
      max_tokens: 300,
      temperature: 0,
      stop: "END",
    });
    if (response.status == 200 && response.data.choices.length > 0)
      return response.data.choices[0].text;

    return "Lo siento, ocurrió un problema, inténtalo más tarde.";
  } catch (e) {
    return "Lo siento, ocurrió un problema, inténtalo más tarde.";
  }
}

module.exports = {
  GetMessage,
};
