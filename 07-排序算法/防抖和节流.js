function debounce(fn,wait){
    let timer = null;
    return function(){
        let context = this,
            args = arguments
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, wait);
    }
}

function throttle(fn,delay){
    let preDate = Date.now()
    return function(){
        let context = this,
            args = arguments,
            nowDate = Date.now()
        if(nowDate - preDate >= delay){
            preDate = Date.now()
            return fn.apply(context,args)
        }
    }
}

function deepCopy(object){
    if(!object || typeof object !== 'object') return;

    let newObject = Array.isArray(object) ? [] : {};

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = typeof object[key] === 'object'
                            ? deepCopy(object[key])
                            : object[key];
        }
    }
    return newObject;
}

function shallowCopy(object){
    if(!object || typeof object !== 'object') return
    let newObject = Array.isArray(object) ? [] : {};
    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] =  object[key];
        }
    }
    return newObject;
}