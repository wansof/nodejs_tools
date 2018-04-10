const fs = require('fs')

var textLoadCount = 0;
var textFileList = [
    "./sample1.js",
    "./sample2.js"
];
var textDataList = [];

var textFileLength = textFileList.length;
for (var i=0 ; i<textFileLength ; i++){
    fs.readFile(textFileList[i], 'utf8', function (err, text) {
        textDataList[textLoadCount] = text;
        textLoadCount++;
        console.log("loadCOunt:"+textLoadCount);

        if (textLoadCount == textFileList.length){
            var joinedText = "";
            console.log("test");
            for (var j=0 ; j<textFileLength ; j++){
                joinedText += textDataList[j]+'\n';
            }
            console.log(joinedText);

            fs.writeFileSync( "join.js" , joinedText );
        }
    });
}
