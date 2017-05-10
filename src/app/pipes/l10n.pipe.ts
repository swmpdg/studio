import { Pipe, PipeTransform } from "@angular/core";

import { Locale } from "app/services/locale/locale.service";

@Pipe({ name: "l10n", pure: false })
export class LocalizationPipe implements PipeTransform {
  public constructor(protected locale: Locale) { }

  public transform(resourceKey: string, ...args: any[]): any {
    const keyParts = resourceKey.split(".");
    let resourceValue: string | boolean;

    if (keyParts && keyParts.length && this.locale.resources) {
      let nestedResource = this.locale.resources;
      for (const keyPart of keyParts) {
        if (nestedResource.hasOwnProperty(keyPart)) {
          nestedResource = nestedResource[keyPart];
        } else { break; }
      }
      // Write the nested resource value...
      resourceValue = nestedResource === this.locale.resources
        ? nestedResource[resourceKey]
        : nestedResource;
    } else {
      resourceValue = this.locale.resources
        ? this.locale.resources[resourceKey]
        : false;
    }

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
