setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("Timer Expied"));
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
	setTimeout(()=>console.log("2nd Timer"));
	process.nextTick(()=> console.log("2nd nextTick"));
	setImmediate(()=>console.log("2nd setImmediate"));
	console.log("File Reading CB");
});
process.nextTick(()=>console.log("nextTick"));
console.log("Last line of the file.");