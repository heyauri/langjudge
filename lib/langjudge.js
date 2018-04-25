let UnicodeTable = require("./unicodeTable");

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
    if(result.indexOf("Latin")>-1||!result.length){
        result=result.concat(LatinJudge(str));
    }
    return result;
};

let LatinJudge=function(str){
    let arr=[];
    if(str.match(/[œôîïëêèéçæâàùûüÿÙÛÜŸÀÂÆÇÉÈÊËÏÎÔŒ]+/)){
        arr.push("French");
    }
    if(str.match(/[äåöÖÅÄ]+/)){
        arr.push("Finnish");
    }
    if(str.match(/[äöüßÄÖÜẞ]+/)){
        arr.push("German");
    }
    if(str.match(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/)){
        arr.push("Polish");
    }
    if(str.match(/[áéíñóúüÁÉÍÑÓÚÜ]+/)){
        arr.push("Spanish");
    }
    if(str.match(/[âçğıİîöşüûÂÇĞIİÎÖŞÜÛ]+/)){
        arr.push("Turkish");
    }
    return arr;
};

module.exports = {
    langAllContain: langAllContain
};