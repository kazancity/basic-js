exports.VigenereCipheringMachine=class VigenereCipheringMachine{
  constructor(direct=true){this.direct=direct}encrypt(msg,i,decrypt=0){var a=0,b,c,ltrKey,ltrChar,arr=Array(0);
  if(!msg||!i){throw Error("Incorrect arguments!")}[msg,i]=[msg,i].map((str)=>str.toUpperCase());for(b of msg){c=b.charCodeAt(0);
  if(c>=65&&c<=90){ltrKey=(i[a++%i.length].charCodeAt(0)-65)%32;ltrChar=decrypt?c+65-ltrKey:c-65+ltrKey;b=String.fromCharCode(ltrChar%26+65)}
  arr.push(b)}return(this.direct?arr:arr.reverse()).join("")}decrypt(msg,i){return this.encrypt(msg,i,1)}}
  