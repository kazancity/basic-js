exports.transform=arr=>{if(!Array.isArray(arr))throw new Error('\'arr\' parameter must be an instance of the Array!')
z=arr.reduce((a,b,c)=>{if(arr[c-1]=='--discard-next')return a
if(arr[c-1]=='--double-next')a.push(arr[c]);if(arr[c+1]=='--double-prev')a.push(arr[c]);if(arr[c+1]=='--discard-prev')return a
if(b=='--discard-next'||b=='--double-prev'||b=='--double-next'||b=='--discard-prev')return a;a.push(arr[c]);return a},Array(0));return z}
