import { OpenAIChatMessage, OpenAIChatModel } from "ai-utils.js";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const model = new OpenAIChatModel({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    maxTokens: 500,
  });

  const text = await model.generateText([
    OpenAIChatMessage.system(
      "Write a short story about a robot learning to love:"
    ),
  ]);

  console.log(text);
})();