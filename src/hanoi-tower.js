exports.calculateHanoi=(disksNumber,turnsSpeed)=>{a={};a.turns=Math.pow(2,disksNumber)-1;
a.seconds=Math.floor(a.turns/turnsSpeed*3600);return a}
