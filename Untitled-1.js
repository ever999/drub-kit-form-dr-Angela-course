// training app

let exNum = 10;
let repeatsNum = [];
//repeatsNum.push(exNum);

function percentage(num, per){
    return (num/100)*per;
}

for(i=0;i<5;i++){
    exNum -= percentage(exNum, 40);
    repeatsNum.push(Math.ceil(exNum));
}

console.log(repeatsNum);