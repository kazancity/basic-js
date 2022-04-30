module.exports.getCommonCharacterCount=(s1,s2)=>{let ar1=Array(0),ar2=s2.split(''),i=0;
for(i=0;i<s1.length;i++){if(ar2.indexOf(s1[i])>= 0){ar1.push(s1[i]);ar2.splice(ar2.indexOf(s1[i]),1)}}return ar1.length}
