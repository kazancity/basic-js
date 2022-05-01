module.exports.repeater=(str,opt)=>{sf=(str,sep,rep)=>{a=str;for(i=1;i<rep;i++){a=a+sep;a=a+str;}return a||''}
z=sf(opt.addition,opt.additionSeparator||'|',opt.additionRepeatTimes);return sf(str+z,opt.separator||'+',opt.repeatTimes)}
