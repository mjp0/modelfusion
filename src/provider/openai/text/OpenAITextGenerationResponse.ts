import zod from "zod";

export const openAITextGenerationResponseSchema = zod.object({
  id: zod.string(),
  object: zod.literal("text_completion"),
  created: zod.number(),
  model: zod.string(),
  choices: zod.array(
    zod.object({
      text: zod.string(),
      index: zod.number(),
      logprobs: zod.nullable(zod.any()),
      finish_reason: zod.string(),
    })
  ),
  usage: zod.object({
    prompt_tokens: zod.number(),
    completion_tokens: zod.number(),
    total_tokens: zod.number(),
  }),
});

export type OpenAITextGenerationResponse = zod.infer<
  typeof openAITextGenerationResponseSchema
>;