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
    const min=find(signs, digits).join('');
    digits.reverse();
    const max=find(signs, digits).join('');
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
    const arr=[];
    const len=signs.length+1;
    function nums(signs, digits) {
        if(arr.length===len) {
            return arr;
        }
        for(let i=0;i<digits.length;i++) {
            if(arr.length > 1) {
                if(signs[0]==='>' && arr[arr.length-1] <= arr[length-2]) continue;
                if(signs[0]==='<' && arr[arr.length-1] >= arr[length-2]) continue;
            }
            arr.push(digits[i]);
            const newDigits= digits.slice(0);
            newDigits.splice(i,1);
            nums(signs.slice(1), newDigits);
            if(arr.length ===len) return arr;
            arr.pop();
        }
    }
    return nums(signs, digits);
}