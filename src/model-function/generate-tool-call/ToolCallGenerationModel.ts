import { FunctionOptions } from "../../core/FunctionOptions.js";
import { Model, ModelSettings } from "../Model.js";
import { ToolDefinition } from "./ToolDefinition.js";

export interface ToolCallGenerationModelSettings extends ModelSettings {}

export interface ToolCallGenerationModel<
  PROMPT,
  SETTINGS extends
    ToolCallGenerationModelSettings = ToolCallGenerationModelSettings,
> extends Model<SETTINGS> {
  doGenerateToolCall(
    tool: ToolDefinition<string, unknown>,
    prompt: PROMPT,
    options?: FunctionOptions
  ): PromiseLike<{
    response: unknown;
    toolCall: { id: string; parameters: unknown } | null;
    usage?: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
  }>;
}