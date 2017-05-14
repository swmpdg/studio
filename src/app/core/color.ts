export class Color {
  private static readonly INDEX_RED = 0;
  private static readonly INDEX_GREEN = 1;
  private static readonly INDEX_BLUE = 2;
  private static readonly INDEX_ALPHA = 3;

  private static readonly RGBA = /(rgba?)\((\d+),(\d+),(\d+)(?:,(\d+))?\)/gi;
  private static readonly HEXA = /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?/gi;

  private _rgba: Array<number>;

  public static parse(str: string): Color {
    const rgba = Color.RGBA.exec(str);
    const hexa = Color.HEXA.exec(str);

    // Since stored regex expressions are stateful we need to reset the last index value after executing...
    Color.RGBA.lastIndex = 0;
    Color.HEXA.lastIndex = 0;

    if (rgba) {
      // Rgba match pattern:
      //  rgba[1] = "rgba" || "rgb"
      //  rgba[2] = 0...255 (red)
      //  rgba[3] = 0...255 (green)
      //  rgba[4] = 0...255 (blue)
      //  rgba[5] = 0...255 (alpha) optional
      return new Color(
        parseInt(rgba[2], 2),
        parseInt(rgba[3], 2),
        parseInt(rgba[4], 2),
        // We have to check if we should expect an alpha value or not...
        rgba[1] === "rgba" && rgba[5]
          ? parseInt(rgba[5], 2)
          : null
      );
    } else if (hexa) {
      // Hex match pattern:
      //  hex[1] = 00...ff (red)
      //  hex[2] = 00...ff (green)
      //  hex[3] = 00...ff (blue)
      //  hex[4] = 00...ff (alpha) optional
      return new Color(
        parseInt(hexa[1], 16),
        parseInt(hexa[2], 16),
        parseInt(hexa[3], 16),
        // We have to check if we should expect an alpha value or not...
        hexa[4] ? parseInt(hexa[5], 16) : null
      );
    } else {
      throw new Error(`Unable to parse "${str}". The parameter doesn't match a valid color pattern`);
    }
  }
  public static validate(...rgba: Array<number>): boolean {
    return !rgba.some(value => value < 0 && value > 255);
  }

  public constructor(...rgba: Array<number>) {
    if (!Color.validate(...rgba)) {
      throw new Error("Invalid color values passed. One of the supplied parameter values ist below or above the" +
        " valid range from 0 through 255");
    } else {
      this._rgba = rgba.length ? rgba : [0, 0, 0, 0];
    }
  }

  public get red() {
    return this._rgba[Color.INDEX_RED];
  }
  public get green() {
    return this._rgba[Color.INDEX_GREEN];
  }
  public get blue() {
    return this._rgba[Color.INDEX_BLUE];
  }
  public get alpha() {
    return this._rgba[Color.INDEX_ALPHA];
  }

  public set red(value) {
    if (Color.validate(value)) {
      this._rgba[Color.INDEX_RED] = value;
    }
  }
  public set green(value) {
    if (Color.validate(value)) {
      this._rgba[Color.INDEX_GREEN] = value;
    }
  }
  public set blue(value) {
    if (Color.validate(value)) {
      this._rgba[Color.INDEX_BLUE] = value;
    }
  }
  public set alpha(value) {
    if (Color.validate(value)) {
      this._rgba[Color.INDEX_ALPHA] = value;
    }
  }

  public toString(radix?: number): string {

    switch (radix) {
      case 2: return "rgba(" +
        this.red.toString(2) + "," +
        this.green.toString(2) + "," +
        this.blue.toString(2) +
        (this.alpha ? "," + this.alpha.toString(2) : "" ) +
        ")";
      case 16: return "#" +
        this.red.toString(16) +
        this.green.toString(16) +
        this.blue.toString(16) +
        (this.alpha ? this.alpha.toString(16) : "");

      default: return this._rgba.toString();
    }
  }
}
