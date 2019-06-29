import * as fs from 'fs';
import * as uglify from 'uglify-js';

const source = fs.readFileSync('src/Tween.js', 'utf8');
const code = uglify.minify(
    source,
    {
        output: {
        },
        sourceMap: {
            includeSources: true,
            url: 'Tween.min.js.map',
        },
    },
);
if (!fs.existsSync('cocos')) {
    fs.mkdirSync('cocos');
}
fs.writeFileSync('cocos/Tween.min.js', code.code);
fs.writeFileSync('cocos/Tween.min.js.map', code.map);
