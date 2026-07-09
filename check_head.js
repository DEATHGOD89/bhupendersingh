const fs = require('fs');
const html = fs.readFileSync('C:/Users/Death_God/Downloads/projects/portfolio/index.html', 'utf8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
if (headMatch) {
    console.log(headMatch[1].substring(0, 1500)); // Print first 1500 chars of head
}
