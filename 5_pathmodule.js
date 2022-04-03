const path=require('path')

// console.log(path.sep)//separator for windows bacslash

// const filePath=path.join('/pathfol','subpathfol','pathtext.txt')

// console.log(filePath)

// const base=path.basename(filePath)
// console.log(base)

const absolute=path.resolve(__dirname,'pathfol','subpathfol','pathtext.txt')
console.log(absolute)