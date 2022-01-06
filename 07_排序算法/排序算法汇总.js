// 冒泡排序 时间复杂度 n² 空间复杂度 1
function bubbleSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return
    // 外层循环表示确定最后一个元素已经排好序
    for(let i=arr.length-1; i>=0; i--){
        // 内层循环表示从 i 到 j 元素 j元素是已经排好序了
        for(let j=0; j<i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
}
function betterSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    let lastIndex = arr.length - 1;
    while(lastIndex > 0){
        let flag = true , k = lastIndex;
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

// 时间复杂度 n² 空间复杂度为1 不是稳定排序
function selectSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        for(let j = minIndex + 1; j<arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
    }
    
}

function insertSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return

    for(let i=1; i<arr.length; i++){
        let tmp = arr[i] , k = i;
        while(tmp < arr[k-1] && k - 1 >= 0){
            arr[k] = arr[k-1];
            k--;
        }
        arr[k] = tmp;
    }
}

// 时间复杂度 O(nlogn) ,空间复杂度为 O(1)
function shellSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return
    
    let gap = Math.floor(arr.length / 2);
    while(gap >= 1){
        for(let i=gap; i<arr.length; i++){
            let tmp = arr[i] , k = i;
            while(tmp < arr[k - gap] && k-gap >=0){
                arr[k] = arr[k-gap];
                k -= gap;
            }
            arr[k] = tmp;
        }
        gap = Math.floor(gap / 2);
    }
}

function mergeSort(arr){
    if(!Array.isArray(arr) || arr.length < 1) return
    if(arr.length == 1) return arr

    let midIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0,midIndex),
        rightArr = arr.slice(midIndex,arr.length);

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(left,right){
    let lf = 0, lr = 0,
        result = [],
        leftLength = left.length,
        rightLength = right.length;
    
    while(lf < leftLength && lr < rightLength){
        if(left[lf] < right[lr]){
            result.push(left[lf]);
            lf++;
        }else{
            result.push(right[lr]);
            lr++;
        }
    }

    while(lf < leftLength){
        result.push(left[lf]);
        lf++;
    }
    while(lr < rightLength){
        result.push(right[lr]);
        lr++;
    }

    return result;
}

function quickSort(arr){
    quickRec(0,arr.length - 1);
}
function quickRec(start,end){
    if(end <= start) return

    let position = getPosition(start,end),
        left = start,
        right = end - 1;
    while(left < right){
        while(arr[++left] < position){}
        while(arr[--right] > position){}
        if(left < right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
        }else{
            break
        }
    }
    [arr[left],arr[end-1]] = [arr[end-1],arr[left]];
    quickRec(start,left-1);
    quickRec(left+1,end);
}
function getPosition(start,end){
    let midIndex = Math.floor((start + end) / 2);
    if(arr[start] > arr[midIndex]){
        [arr[start],arr[midIndex]] = [arr[midIndex],arr[start]];
    }
    if(arr[midIndex] > arr[end]){
        [arr[midIndex],arr[end]] = [arr[end],arr[midIndex]];
    }
    if(arr[start] > arr[end]){
        [arr[start] , arr[end]] = [arr[end],arr[start]];
    }
    [arr[midIndex],arr[end-1]] = [arr[end-1],arr[midIndex]];
    return arr[end - 1]
}

let arr = [24,3,6,10,9,8,56,100]

// bubbleSort(arr)
// betterSort(arr)
// selectSort(arr)
// insertSort(arr)
// shellSort(arr)
// console.log(mergeSort(arr))
quickSort(arr); 

console.log(arr)