import { Pipe, PipeTransform } from "@angular/core";

import { Locale } from "app/services/locale/locale.service";

@Pipe({ name: "l10n", pure: false })
export class LocalizationPipe implements PipeTransform {
  public constructor(protected locale: Locale) { }

  public transform(resourceKey: string, ...args: any[]): any {
    return this.locale.get(resourceKey, ...args);
  }
}
