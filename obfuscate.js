var obfuscateString = function(str) {
    return str.replace(/[a-z]/g, "x").replace(/[A-Z]/g, "X").replace(/[0-9]/g, "0");
}

var obfuscateObject = function(obj) {
    for(var i in obj) {
        if(obj.hasOwnProperty(i)){
            var type = typeof obj[i];

            if (type === "object") {
                obfuscateObject(obj[i]);
            }
            else if (i === "text") {
                obj[i] = obfuscateString(obj[i]);
            }
        }
   }
}