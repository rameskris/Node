const {readFile,writeFile}=require('fs')
readFile('./pathfol/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result
    console.log(result)
    readFile('./pathfol/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result
        writeFile('./pathfol/newFileagain.txt',`${first} and ${second}`,{flag:'a'},(err,res)=>{
           console.log(res)
        })

    })
    
   
})

