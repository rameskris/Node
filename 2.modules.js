//modules
//every file is module(by default)
//encapsulated code(only share minimum)

//import
//const {jhon,peter}=require('./2a_names')
//or
const names=require('./2a_names')
const sayHi=require('./2b_utils')
const data=require('./2c_mod_altsyntax')//here we getting object becoz two
// exports so use common name//{ items: [ 'item1', 'item2' ], singlePerson: { name: 'raam' } }


sayHi('sus')
sayHi(names.namesjhon)
sayHi(names.peter)
console.log(data.singlePerson)