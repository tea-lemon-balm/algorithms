const inequalityNumber = function (signs) {
    // TODO: 여기에 코드를 작성합니다.
    // The range of Integer is from 0 to 9.
    // Numbers in the range can choose the one time.
    // Split signs to array.
    // Calculate the maximum and minimum inequlity Number.
    // Substract the maximum value with the minimum value.
    // Return the difference.
    signs= signsToArr(signs);
    const digits= range(10);
    const max=Number(findMaxInequalityNumber(signs, digits).join(''));
    const min=Number(findMinInequalityNumber(signs, digits).join(''));
    return [max, min]
};

function signsToArr(signs) {
    return signs.split(" ")
}

function range(num) {
    const arr=Array(10).fill(0).map((el,idx)=> el+idx);
    return arr;
}

function findMaxInequalityNumber(signs, digits) {
    const arr=[];
    function maxInequalityNumber(signs, digits) {
        for(let sign of signs){
            if(sign==='>') {
                if(arr.length===0) {
                    arr.push(digits[digits.length-1])
                    digits.pop();
                    arr.push(digits[digits.length-1])
                    digits.pop();
                } else {
                    for(let i=digits.length-1;i>=0;i--) {
                        if(arr[arr.length-1] > digits[i]) {
                            arr.push(digits[i]);
                            digits.splice(i,1);
                            break;
                        }
                    }
                }
            } else if(sign==='<') {
                if(arr.length===0) {
                    arr.push(digits[digits.length-1])
                    digits.pop();
                    arr.push(digits[digits.length-1])
                    digits.pop();
                    [arr[0],arr[1]]=[arr[1],arr[0]]
                } else {
                    for(let i=digits.length-1;i>=0;i--) {
                        if(arr[arr.length-1] < digits[i]) {
                            arr.push(digits[i]);
                            digits.splice(i,1);
                            break;
                        }
                    }
                }
            }
        }
        return arr;
    }
    maxInequalityNumber(signs, digits);
    return arr;
}


function findMinInequalityNumber(signs, digits) {
    const arr=[];
    function minInequalityNumber(signs, digits) {
        for(let sign of signs){
            if(sign==='<') {
                if(arr.length===0) {
                    arr.push(digits[0]);
                    digits.shift();
                    arr.push(digits[0]);
                    digits.shift();
                }
            } else if(sign==='>') {
                if(arr.length===0) {
                    arr.push(digits[0])
                    digits.shift();
                    arr.push(digits[0])
                    digits.shift();
                    [arr[0],arr[1]]=[arr[1],arr[0]]
                }
            }
        }
        return arr;
    }
    minInequalityNumber(signs, digits);
    return arr;
}