function mapToNegativize (array){
    const newArr=[]
    for(let i=0;i<array.length;i++){
        array[i]*=-1;
        newArr.push(array[i])
    }
    return newArr
}

function mapToNoChange (array){
    const newArr =[...array]
    return newArr
}

function mapToDouble (array){
    const newArr=[]
    for(let i=0;i<array.length;i++){
        array[i]*=2;
        newArr.push(array[i])
    }
    return newArr
}

function mapToSquare(array){
    const newArr=[]
    for(let i=0;i<array.length;i++){
        array[i]*=array[i];
        newArr.push(array[i])
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total=startingPoint;
    for(let i=0;i<sourceArray.length;i++){
        total+=sourceArray[i];
    }
    return total
}

function reduceToAllTrue(sourceArray, startingPoint=0){
    const newArr= []
    for(let i=0;i<sourceArray.length;i++){
        if(!sourceArray[i]===false){newArr.push(sourceArray[i])}
    }
    return sourceArray.length===newArr.length
}

function reduceToAnyTrue(sourceArray, startingPoint=0){
    const newArr= []
    for(let i=0;i<sourceArray.length;i++){
        if(!sourceArray[i]===false){newArr.push(sourceArray[i])}
    }
    return newArr.length>0
}