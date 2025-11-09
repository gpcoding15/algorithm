const intercalateLists = (list1, list2) => {
    const list1Len = list1.length
    const list2Len = list2.length
    newList = []
    
    if(list1Len === list2Len){
        for(let i = 0; i < list1Len; i++){
            newList.push(list1[i])
            newList.push(list2[i])
        }
    }
    return newList
}

module.exports = { intercalateLists }