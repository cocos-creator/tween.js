"use strict";
exports.__esModule = true;
var uglify = require("uglify-js");
var fs = require("fs");
var source = fs.readFileSync("src/Tween.js", "utf8");
var code = uglify.minify(source, {
    output: {},
    sourceMap: {
        includeSources: true,
        url: "Tween.min.js.map"
    }
});
if (!fs.existsSync('cocos')) {
    fs.mkdirSync('cocos');
}
fs.writeFileSync('cocos/Tween.min.js', code.code);
fs.writeFileSync('cocos/Tween.min.js.map', code.map);
