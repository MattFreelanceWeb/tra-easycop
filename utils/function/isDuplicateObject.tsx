export const isDuplicateObject = (obj:{}, arr:any[]) => {

    const areObjectsEqual =(obj1:{}, obj2:{})=>{
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    }

    for(let i = 0; i< arr.length; i++){
        if(areObjectsEqual(obj, arr[i])){
            return true
        }
    }
}