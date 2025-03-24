//modules are protected therir variables and functions from leaking

console.log("sum module exported");


function calculateSum(a,b){
    const sum = a+b;

    console.log(sum);
}
module.exports={calculateSum};

// module.exports.x = x;
// module.exports.calculateSum=calculateSum;