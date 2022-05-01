exports.renameFiles=(names)=>{z=Array(0),a={};for(b of names){
if(b in a){x=`${b}(${a[b]})`;z.push(x);a[x]=1;a[b]++}else{z.push(b);a[b]=1}}return z}
