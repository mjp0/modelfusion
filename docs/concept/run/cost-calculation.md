---
sidebar_position: 3
---

# Cost Calculation

Calls to generative models such as OpenAI's API can get expensive quickly. To keep track of your costs and to enable you to understand them, `ai-utils.js` contains a cost calculation framework. You can use it to log the costs of [runs](/concept/run/) or even implement budgeting that automatically aborts a run when it exceeds a certain cost.

### Example

```ts
const model = new OpenAITextGenerationModel({
  model: "text-davinci-003",
  temperature: 0.7,
  maxTokens: 500,
});

// define a run with cost calculators:
const run = new DefaultRun({
  costCalculators: [new OpenAICostCalculator()],
});

const text = await model.generateText(
  "Write a short story about a robot learning to love:\n\n",
  { run } // pass in the run into the model calls
);

// calculate the overall cost of the run:
const cost = await run.calculateCost();

console.log(`Cost: ${cost.formatAsDollarAmount({ decimals: 4 })}`);
```