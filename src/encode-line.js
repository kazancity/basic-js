module.exports.encodeLine=str=>{z='',a=1;
for(let i=0;i<str.length;i++){if(str[i]==str[i+1]){a++}else if(a==1){z=z+str[i]}else{z=z+`${a}${str[i]}`;a=1}}return z}