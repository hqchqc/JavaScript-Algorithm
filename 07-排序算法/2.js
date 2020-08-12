function bubbleSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let j=arr.length - 1; j>=0; j--){
        for(let i=0; i<j; i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
    }
}

function betterSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    let lastIndex = arr.length - 1;
    while(lastIndex > 0){
        let flag = true, j = lastIndex

        for(let i=0; i<j; i++){
            if(arr[i] > arr[i+1]){
                flag = false;
                lastIndex = i;
                console.log(lastIndex);
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }

        if(flag) break
    }
}

function selectSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let j=0; j<arr.length; j++){
        let minIndex = j;
        for(let i=minIndex + 1; i<arr.length; i++){
            if(arr[minIndex] > arr[i]){
                minIndex = i;
            }
        }
        [arr[minIndex],arr[j]] = [arr[j],arr[minIndex]]
    }
}

function insertSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let i=1; i<arr.length; i++){
        let tmp = arr[i] , k = i;
        while(tmp < arr[k-1] && k - 1 >= 0){
            arr[k] = arr[k-1]
            k--;
        } 
        arr[k] = tmp;
    }
    
}

function shellSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    let gap = Math.floor(arr.length / 2);
    while(gap >= 1){
        for(let i=gap; i<arr.length; i++){
            let tmp = arr[i] , k = i;
            while(tmp < arr[k-gap] && k - gap >= 0){
                arr[k] = arr[k-gap]
                k -= gap;
            }
            arr[k] = tmp;
        }
        gap = Math.floor(gap / 2);
    }
}

function mergeSort(arr){
    if(!Array.isArray(arr) || arr.length <= 0) return

    if(arr.length == 1) return arr

    let midIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0,midIndex),
        rightArr = arr.slice(midIndex,arr.length)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let lf = 0,lr = 0,result = [];

    while(lf < leftArr.length && lr < rightArr.length){
        if(leftArr[lf] > rightArr[lr]){
            result.push(rightArr[lr]);
            lr++;
        }else{
            result.push(leftArr[lf]);
            lf++;
        }
    }

    while(lf !== leftArr.length){
        result.push(leftArr[lf])
        lf++;
    }
    while(lr !== rightArr.length){
        result.push(rightArr[lr]);
        lr++;
    }

    return result
}

function quickSort(arr){
    quickSortRec(0,arr.length-1);

    function quickSortRec(start,end){
        if(end <= start) return
    
        let partitions = partition(start,end),
            lf = start,
            lr = end - 1;
        
        while(lf < lr){
            while(arr[++lf] < partitions){}
            while(arr[--lr] > partitions){}
        
            if(lf < lr){
                [arr[lf] , arr[lr]] = [arr[lr] , arr[lf]]
            }else{
                break;
            }
        }
        
        [arr[lf],arr[end-1]] = [arr[end-1],arr[lf]]
    
        quickSortRec(start , lf - 1);
        quickSortRec(lf + 1 , end);
    }

    function partition(start,end){
        let midIndex = Math.floor((start + end) / 2);
        if(arr[start] > arr[midIndex]){
            [arr[start],arr[midIndex]] = [arr[midIndex],arr[start]]
        }
        if(arr[midIndex] > arr[end]){
            [arr[midIndex] , arr[end]] = [arr[end] , arr[midIndex]]
        }
        if(arr[start] > arr[end]){
            [arr[start] , arr[end]] = [arr[end] , arr[start]]
        }
        [arr[midIndex] , arr[end - 1]] = [arr[end - 1] , arr[midIndex]];
        return arr[end-1];
    }
    
}





let arr = [20,3,15,4,15]
// bubbleSort(arr)
// betterSort(arr)
// selectSort(arr)
// insertSort(arr)
// shellSort(arr)
// console.log(mergeSort(arr))
quickSort(arr)
console.log(arr)

let test = ['1','2']
test = test.map(value=>{
    return parseInt(value)
})
console.log(test)

let ab = [12,1,3,23,42,234]

ab.push(1)
// ab.pop()
// ab.shift()
// ab.unshift()
console.log(ab);
console.log(ab.length);
console.log(ab.shift())

let home = [1,2,3,4,5,5];
home.forEach((value,index)=>{
    home[index] = value * value;
});

let homes = home.map((value,index) => {
    return value * value
})
console.log(home);
console.log(homes);

console.log('-----------------------------------------------')

