let UnicodeTable = require("./unicodeTable");


let getType = function (val) {
    switch (Object.prototype.toString.call(val)) {
        case "[object Array]":
            return 'Array';
    }
};

let langAllContain = function (str) {
    let result = [];
    for (let key in UnicodeTable) {
        for (let item of UnicodeTable[key]) {
            if (item.test(str)) {
                result.push(key);
                break;
            }
        }
    }
    return result;
};

module.exports = {
    langAllContain: langAllContain
};