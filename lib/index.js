const rgbRegExp = /^(\d{1,3},?){3}$/;
const hexRegExp=/^#?([a-f\d]{3}|[a-f\d]{6})$/i;

export class Rainbow {

  __primitiveValue__ = '';
  __rgb__ = [];

  /**
   * Transform Hex color to RGB color
   * @param {string} val Hex color like #ff00ff
   * @returns {number[]}
   */
  static hex2rgb(val){
    if(!this.isHex(val))throw new Error('[Rainbow] expected a hex color.');

    val = val.replace('#', '');

    let hexArr = [val.substring(0, 2), val.substring(2, 4), val.substring(4, 6)];

    return hexArr.map(item => parseInt(item, 16));
  }

  /**
   * 
   * @param {string} val Hex color
   */
  static isHex(val){
    return hexRegExp.test(val);
  }

  /**
   * 
   * @param {string} val Rgb color like 158,128,255
   */
  static isRgb(val){
    return rgbRegExp.test(val);
  }

  constructor(color) {
    this.__primitiveValue__ = color;
    this.__init__();
  }
  __init__() {
    const val=this.__primitiveValue__;

    this.__rgb__ =Rainbow.isHex(val)? Rainbow.hex2rgb(val):this.__rgbStr2Arr__();
  }


  __rgbStr2Arr__ (){
    let matches = this.__primitiveValue__.match(rgbRegExp);

    return matches ? matches[0].split(',').map(val => parseInt(val, 10)) : []
  }

  /**
   * lighten color
   * @param {number} percent 0-1
   */
  lighten(percent = 0) {
    this.__rgb__ = this.__rgb__.map(val => {
      let result = parseInt(val * percent + val);
      return result > 255 ? 255 : result;
    });
  }

  /**
   * darken color
   * @param {number} percent 0-1
   */
  darken(percent = 0) {
    this.__rgb__ = this.__rgb__.map(val => {
      let result = parseInt(val - val * percent);
      return result < 0 ? 0 : result;
    });
  }

  /**
   * to rgb value
   * @returns {string}
   */
  toRgb() {
    return `rgb(${this.__rgb__.join(',')})`
  }

  /**
   * to hex value
   * @returns {string}
   */
  toHex() {

    let temp = this.__rgb__.map(val => (new Number(val)).toString(16));
    return '#' + temp.join('');
  }
}