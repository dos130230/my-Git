
let [,,Id] = process.argv
if(!Id) return
let fs = require("fs")
let obj = fs.readFileSync("../baza.json","utf8")
obj = JSON.parse(obj) || {}
obj = obj[Id]
if(!obj) return console.log("Bunday Id yoq!")
fs.writeFileSync(obj.path,obj.src)
console.log("Restore file "+obj.path)