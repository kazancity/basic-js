module.exports.createDreamTeam=members=>{if(!Array.isArray(members))return false; 
a=members.filter(x=>typeof x=='string');l=a.map(y=>y.trim()[0].toUpperCase());return l.sort().join('')}
