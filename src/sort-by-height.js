exports.sortByHeight=arr=>{z=arr.filter(elem=>elem!==-1).sort((x,y)=>x-y)
arr.forEach((elem,a)=>{if(elem==-1){z.splice(a,0,-1)}});return z}
