//fs module sync
const {readFileSync,writeFileSync}=require('fs')

const first =readFileSync('./pathfol/first.txt','utf-8')
const second =readFileSync('./pathfol/second.txt','utf-8')

//by default it looks for that file if its not there create one 
//but if alreadyt ther this will rewite already what on there so use third parameter
writeFileSync('./pathfol/newFile.txt',`Here is the result ${first},${second}`,{flag:'a'})