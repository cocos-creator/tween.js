import * as uglify from 'uglify-js';
import * as fs from 'fs'

var source = fs.readFileSync("src/Tween.js", "utf8");
let code = uglify.minify(
    source,
    {
        output: {
        },
        sourceMap: {
            includeSources: true,
            url: "Tween.min.js.map"
        }
    }
)
if (!fs.existsSync('cocos')) {
    fs.mkdirSync('cocos');
}
fs.writeFileSync('cocos/Tween.min.js', code.code);
fs.writeFileSync('cocos/Tween.min.js.map', code.map);