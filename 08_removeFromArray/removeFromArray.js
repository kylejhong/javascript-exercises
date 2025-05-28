const removeFromArray = function() {
    let newArr = arguments[0].slice();
    
    for (let i = 1; i < arguments.length; i++) {
        newArr = newArr.filter((element) => (element !== arguments[i]));
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;