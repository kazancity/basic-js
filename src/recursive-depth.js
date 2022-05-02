module.exports.DepthCalculator=class DepthCalculator{calculateDepth=a=>Array.isArray(a)?1+Math.max(0,...a.map((e)=>this.calculateDepth(e))):0}
