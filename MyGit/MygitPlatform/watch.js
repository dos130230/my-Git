
let sum = ''
let arr = []
let papka = []
const fs = require("fs")
let red = fs.readdirSync("./")
function Recur(argument,red) {
	for(let i of red){
		try{
			let olim = fs.readdirSync(argument+"/"+i)
			Recur(argument+"/"+i+"/",olim)
			papka.push(argument+"/"+i+"/")
		}catch(eror){
			arr.push(argument+i)
		}
	}
}
Recur("./",red)
console.log("How all file watching........")
// console.log(papka)

for(let i of papka){
	fs.watchFile(i,{inerval:500},(what,file)=>{
		console.log("qoshildiiii----------------")
	})
}



for(let i of arr)
fs.watchFile(i,{inerval:500},(what,file)=>{
	let read = fs.readFileSync(i,"utf8")

	let obj = 
		{
			path:i,
			src:read
		}
	
	let readBaza = fs.readFileSync("../baza.json","utf8")|| "{}"
	readBaza = JSON.parse(readBaza)
	let rendom = Math.random()*100001|0
	readBaza[rendom]= obj
	fs.writeFileSync("../baza.json",JSON.stringify(readBaza,null,4))
	
	console.log("change: "+i)
	console.log("write: "+read+" id: "+rendom)

})




