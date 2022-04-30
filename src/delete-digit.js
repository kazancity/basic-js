module.exports.deleteDigit=(n)=>{ar=Array(0),s=n.toString();for(i=0;i<s.length;i++){
ar=ar.concat(Number(s.slice(0,i)+s.slice(i+1)))}return ar.sort((x,y)=>y-x)[0]}