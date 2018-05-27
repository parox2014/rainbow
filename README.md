# Rainbow

A color handle plugin

## Installation

```cmd
  yarn add rainbowow

  #or

  npm i rainbowow --save
```

## Import

### script

```html
<script src="node_modules/rainbow/dist/ranbow.min.js"></script>
```

### es6
```js
import Rainbow from 'rainbow'

```

### cmd

```js
const Rainbow=require('rainbow');
```

## Usage

```js
const color=new Rainbow('#666');

color.lighten(0.2);
color.toHex();//#7a7a7a
color.toDec();//rgb(122,122,122)

color.darken(0.3);
color.toHex();//#555555;
color.toDec();//rgb(85,85,85)

//reset color
color.reset();
color.toHex();//#666666;
color.toDec();//rgb(102,102,102)

//add another color
color.add('#666');
color.toHex();//#e0e0e0;
color.toDec();//rgb(224,224,224)

color.lighten(0.1).darken(0.3).toHex();

//transform a hex color to dec color
//or transform a dec color to hex color
Rainbow.hex2rgb('#23fe56');//rgb(35,254,86);
Rainbow.rgb2hex('35,125,39');//#237d27
```

## API

### Instance methods

* `lighten` : 以百分比提升亮度，直至完全变成白色，参数为0-1之间任意数字
* `darken` : 以百分比减少亮度，直至完全变成黑色，参数为0-1之间任意数字
* `accent` :转换为对比色
* `add` : 两个颜色相加
* `reset` : 重置为初始颜色
* `toHex` : 返回颜色的十六进制色值，如： `#237d27`
* `toDec` : 返回颜色的十进制色值,如：`rgb(35,254,86)`

### Static methods

* `isHex` :判断是否是十六进制色值
* `isDec` :判断是否是十进制色值
* `hex2rgb` :将一个十六进制色值转换为十进制色值
* `rgb2hex` :将一个十进制色值转换为十六进制色值

```ts
export class Rainbow{
  static isHex(color:string):boolean;
  static isDec(color:string):boolean;
  static rgb2hex(color:string):string;
  static hex2rgb(color:string):string;
  constructor(color:string);
  accent():Rainbow;
  darken():Rainbow;
  lighten():Rainbow;
  reset():Rainbow;
  toHex():string;
  toDec():string;
}
```
