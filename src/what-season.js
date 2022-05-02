exports.getSeason=date=>{if(!date)return`Unable to determine the time of year!`
if(!(date instanceof Date)||Object.getOwnPropertyNames(date).length>0)throw new Error(`Invalid date!`)
season=[`winter`,`spring`,`summer`,`fall`];return season[date.getMonth()==11?0:Math.floor((date.getMonth()+1)/3)]}
