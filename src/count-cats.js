module.exports.countCats=(ar)=>{return Array.from(ar).flat().reduce((el1,el2)=>el2=='^^'?el1+1:el1,0)}
