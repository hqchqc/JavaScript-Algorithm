function bubbleSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return;

    for(let i=arr.length - 1; i > 0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
}

function betterSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    let lastIndex = arr.length - 1;
    while(lastIndex > 0){
        let flag = true , k = lastIndex
        
        for(let i=0; i<k; i++){
            if(arr[i] > arr[i+1]){
                flag = false;
                lastIndex = i;
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            }
        }

        if(flag) break;
    }
}
// nn 1

function selectSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let j=0; j<arr.length-1; j++){
        let minIndex = j;
        for(let i = minIndex + 1; i<arr.length; i++){
            if(arr[minIndex] > arr[i]){
                minIndex = i;
            }
        };
        [arr[minIndex],arr[j]] = [arr[j],arr[minIndex]];
    }   
}
// nn 1

function insertSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let i=1; i<arr.length; i++){
        let tmp = arr[i] , k = i;
        while(arr[k] < arr[k-1] && k-1 >= 0){
            arr[k] = arr[k-1];
            k--;
        }
        arr[k] = tmp;
    }
}
//nn 1

function shellSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    let gap = Math.floor(arr.length / 2);
    while(gap > 0){
        for(let i=gap; i<arr.length; i++){
            let tmp = arr[i] , k = i;
            while(arr[k] < arr[k-gap] && k-gap >= 0){
                arr[k] = arr[k-gap];
                k -= gap;
            }
            arr[k] = tmp
        }

        gap = Math.floor(gap / 2);
    }
}
// nlogn 1

function mergeSort(arr){
    if(!Array.isArray(arr) || arr.length <= 0) return

    if(arr.length == 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0,midIndex),
        rightArr = arr.slice(midIndex,arr.length);
    
    return merge(mergeSort(leftArr),mergeSort(rightArr))

    function merge(leftArr,rightArr){
        let lf = 0, lr = 0, result = [],
            leftLength = leftArr.length,
            rightLength = rightArr.length;
        
        while(lf < leftLength && lr <rightLength){
            if(leftArr[lf] > rightArr[lr]){
                result.push(rightArr[lr]);
                lr++;
            }else{
                result.push(leftArr[lf]);
                lf++;
            }
        }

        while(lr < rightLength){
            result.push(rightArr[lr]);
            lr++;
        }
        while(lf < leftLength){
            result.push(leftArr[lf]);
            lf++;
        }

        return result;
    }
}
//nlogn n

function quickSort(arr){
    quickRec(0,arr.length-1);

    function quickRec(start,end){
        if(end <= start) return

        let position = getPosition(start,end),
            lf = start , lr = end-1;
        
        while(lf < lr){
            while(arr[++lf] < position){}
            while(arr[--lr] > position){}

            if(lf < lr){
                [arr[lf],arr[lr]] = [arr[lr],arr[lf]]
            }else{
                break;
            }
        }
        [arr[lf],arr[end-1]] = [arr[end-1],arr[lf]]
        quickRec(start,lf-1);
        quickRec(lf+1,end);
    }

    function getPosition(start,end){
        let midIndex = Math.floor((start+end) / 2);
        if(arr[start] > arr[midIndex]){
            [arr[start],arr[midIndex]] = [arr[midIndex],arr[start]]
        }
        if(arr[midIndex] > arr[end]){
            [arr[midIndex],arr[end]] = [arr[end],arr[midIndex]]
        }
        if(arr[start] > arr[end]){
            [arr[start] , arr[end]] = [arr[end] , arr[start]]
        }

        [arr[midIndex],arr[end-1]] = [arr[end-1],arr[midIndex]];
        return arr[end-1];
    }
}
//nlogn logn

let arr = [12,1,3,23,42,234]

// bubbleSort(arr)
// betterSort(arr)
// selectSort(arr)
// insertSort(arr)
// shellSort(arr)
// console.log(mergeSort(arr))
quickSort(arr)

console.log(arr)