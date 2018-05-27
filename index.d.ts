export class Rainbow{
  static isHex(color:string):boolean;
  static isDec(color:string):boolean;
  static rgb2hex(color:string):string;
  static hex2rgb(color:string):string;
  constructor(color:string);
  accent():Rainbow;
  darken():Rainbow;
  lighten():Rainbow;
  toHex():string;
  toDec():string;
}

export default Rainbow;