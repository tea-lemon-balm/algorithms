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
    const min=find(signs, digits);
    digits.reverse();
    const max=find(signs, digits);
    return [max,min]
}

function signsToArr(signs) {
    return signs.split(" ")
}

function range(num) {
    const arr=Array(10).fill(0).map((el,idx)=> el+idx);
    return arr;
}

function find(signs, digits) {
    // const arr=[];
    const len=signs.length+1;
    function nums(signs, digits, arr) {
        if(arr.length===len) {
            return arr;
        }
        for(let i=0;i<digits.length;i++) {
            if(arr.length>0) {
                if(signs[0]==='>' && arr[arr.length-1] <= digits[i]) continue;
                if(signs[0]==='<' && arr[arr.length-1] >= digits[i]) continue;
            }
            arr.push(digits[i]);
            // If you use the variable "newDigits" to the varialbe "digits",
            // the variable "digits" is changed by the function find.
            // Because the variable "digits" is the parameter of the function find in the function inequalityNumber.
            const newDigits= digits.slice(0);
            newDigits.splice(i,1);
            // digits.splice(i,1);
            let result;
            if(arr.length===1) {
                result = nums(signs, newDigits, arr);
                // result = nums(signs, digits, arr);
            } else {
                result = nums(signs.slice(1), newDigits, arr);
                // result = nums(signs.slice(1), digits, arr);
            }
            if(result!==undefined) {
                return result;
            }
            arr.pop();
        }
    }
    return nums(signs, digits, []);
}

output = inequalityNumber('<');
console.log(output);