const {readFile,writeFile}=require('fs')

readFile('./pathfol/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
   const first=result
   readFile('./pathfol/second.txt','utf-8',(err,result)=>{
       if(err){
        console.log(err)
    }
   const second=result
   writeFile('./pathfol/newFile.txt',`Here is the result :${first},${second}`,(err,result)=>{
       if(err){
        console.log(err)
    }
    console.log(result)
       

   })

   })
})
