module.exports.getDNSStats=(domains)=>{obj={};domains.forEach(d=>{b=d.split('.').reverse();
b.forEach((s,i)=>{ar=b.slice(0,i);c='.'+ar.concat(b[i]).join('.');if(obj[c]){obj[c]++}else obj[c]=1})});return obj}
