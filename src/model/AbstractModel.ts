import { ModelInformation } from "../run/ModelInformation.js";
import { BaseModelSettings } from "./Model.js";

export abstract class AbstractModel<SETTINGS extends BaseModelSettings> {
  constructor({ settings }: { settings: SETTINGS }) {
    this.settings = settings;
  }

  abstract readonly provider: string;
  abstract readonly modelName: string | null;

  // implemented as a separate accessor to remove all other properties from the model
  get modelInformation(): ModelInformation {
    return {
      provider: this.provider,
      modelName: this.modelName,
    };
  }

  protected get uncaughtErrorHandler() {
    return (
      this.settings.uncaughtErrorHandler ??
      ((error) => {
        console.error(error);
      })
    );
  }

  readonly settings: SETTINGS;

  abstract withSettings(additionalSettings: Partial<SETTINGS>): this;
}