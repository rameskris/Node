//built in module
const os=require('os')//here no folder because its inbuilt one

//info about cuurent user

// const user=os.userInfo()
// console.log(user)


//method return the system uptime in seconds

// console.log(os.uptime())

// const cuurentOs={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem(),
    
// }
// console.log(cuurentOs)

const eol=os.cpus()
 console.log(eol[0])
// for(const prop in eol[0]){
//     //console.log();
//     console.log(`${eol[0][prop]}`);
// }