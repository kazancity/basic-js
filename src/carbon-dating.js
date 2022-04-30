const MODERN_ACTIVITY=15,HALF_LIFE_PERIOD=5730;
module.exports.dateSample=(samplAct)=>{
 if(samplAct>MODERN_ACTIVITY||typeof(samplAct)!=='string'||samplAct<=0||isNaN(+samplAct)){return false}
 return Math.ceil(Math.log(MODERN_ACTIVITY/samplAct)/(Math.log(2)/HALF_LIFE_PERIOD))}
