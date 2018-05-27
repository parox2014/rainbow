import { Rainbow } from "./lib";

const color=new Rainbow('125 234 78');

const box=document.querySelector('.box');
const percentInput=document.querySelector('#percent');
const hexInput=document.querySelector('#hex');
const decInput=document.querySelector('#dec');
const darkenBtn=document.querySelector('#darken');
const lightenBtn=document.querySelector('#lighten');
const accentBtn=document.querySelector('#accent');
const addBtn=document.querySelector('#add');

setBoxColor(color.toDec());

darkenBtn.addEventListener('click',()=>{
  const per=percentInput.value;
  const transColor=color.darken(per);
  setAllValue(transColor);
})

lightenBtn.addEventListener('click',()=>{
  const per=percentInput.value;
  const transColor=color.lighten(per);
  setAllValue(transColor);
})

accentBtn.addEventListener('click',()=>{
  setAllValue(color.accent());
})

addBtn.addEventListener('click',()=>{
  setAllValue(color.add('#f3e64c'));
})

function setAllValue(color){
  hexInput.value=color.toHex();
  decInput.value=color.toDec();
  setBoxColor(color.toHex());
}
function setBoxColor(color){
  box.style.backgroundColor=color;
}

window.cl=new Rainbow('#666');

window.cl.lighten(0.2);
window.Rainbow=Rainbow;