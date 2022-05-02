exports.getSumOfDigits=getSumOfDigits=n=>{if(n<10)return n;z=String(n).split('').reduce((a,b)=>+(a)+(+b));return getSumOfDigits(z)}
