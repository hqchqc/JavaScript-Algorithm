function betterBubble(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return 
    let lastIndex = arr.length - 1
    while(lastIndex > 0){
        let flag = true, k = lastIndex
        for(let i=0; i < k; i++){
            if(arr[i] > arr[i+1]){
                flag = false;
                lastIndex = i;
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            }
        }
        if(flag) break
    }
}

function selectSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return
    let minIndex = 0;
    for(let j=0; j<arr.length; j++){
        minIndex = j;
        for(let i=minIndex+1; i<arr.length; i++){
            if(arr[minIndex] > arr[i]){
                minIndex = i
            }
        }
        [arr[minIndex],arr[j]] = [arr[j],arr[minIndex]]
    }
    
    
}

let arr = [12,2,3,41,242,1,2]
// betterBubble(arr)
selectSort(arr)
console.log(arr)