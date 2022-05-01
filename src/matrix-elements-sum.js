exports.getMatrixElementsSum=matrix=>{a=0;for(x=0;x<matrix.length;x++){for(y=0;y<matrix[x].length;y++){
if(x==0){a=a+matrix[x][y]}if(x>0&&matrix[x-1][y]!==0){a=a+matrix[x][y]}}}return a}
