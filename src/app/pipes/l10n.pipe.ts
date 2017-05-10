import { Pipe, PipeTransform } from "@angular/core";

import { Locale } from "app/services/locale/locale.service";

@Pipe({ name: "l10n", pure: false })
export class LocalizationPipe implements PipeTransform {
  public constructor(protected locale: Locale) { }

  public transform(resourceKey: string, ...args: any[]): any {
    let resourceValue = this.locale.resources
      ? this.locale.resources[resourceKey]
      : false;

    if (args.length && resourceValue) {
      // Are there any arguments...?
      resourceValue = resourceValue.toString().replace(/{([0-9a-z_$]+)}/gi, (fullMatch, key) => {
        return args.length === 1 && typeof args[0] === "object"
          ? args[0][key] // Referring to the inner object instance for named format arguments...
          : args[key];   // Referring to the argument array index...
      });
    }
    // Finally return the resource value. Or the resource key for no content...
    return resourceValue || resourceKey;
  }
}
