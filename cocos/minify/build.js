"use strict";
exports.__esModule = true;
var fs = require("fs");
var uglify = require("uglify-js");
var source = fs.readFileSync('src/Tween.js', 'utf8');
var code = uglify.minify(source, {
    output: {},
    sourceMap: {
        includeSources: true,
        url: 'Tween.min.js.map'
    }
});
if (!fs.existsSync('cocos')) {
    fs.mkdirSync('cocos');
}
fs.writeFileSync('cocos/Tween.min.js', code.code);
fs.writeFileSync('cocos/Tween.min.js.map', code.map);
