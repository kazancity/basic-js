module.exports.chainMaker={a:Array(0),getLength(){return this.a.length},addLink(z=''){this.a.push(`( ${z} )`);return this},
removeLink(y){i=--y;if(!Number.isInteger(i)||i<0||i>=this.a.length){this.a=Array(0);throw new Error("You can't remove incorrect link!")}
this.a.splice(i,1);return this},reverseChain(){this.a.reverse();return this},finishChain(){res=this.a.join('~~');this.a=Array(0);return res}}
