const x = ' hero';
const y = 'alom' ;
let  z = ' hello , this is jowel \n ' +
'welcome to here \n '+
'Bangladesh'

// update Template String :

let Z = ` hello , I am Jowel 
welcome to my studio ,
Bangladesh`
console.log( Z );

const count = 5 ;
const v = [ 21,34,56,43,56,687];
const old1 = '<h3> Friend' + count + '</h3>';
const old2 = `<h3> Friend' + ${count} + </h3>`;
const old3 = `<h3> Friend' + ${v.length} + </h3>`;
console.log(old3);

const A = ' Hero';
const B = 'Alom';
const C = `${A} ${B} Is Bangla product ${67+78}`
console.log( C );