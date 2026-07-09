const fs = require('fs');
const path = require('path');

function searchMeta(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'about_removed') {
                searchMeta(filePath);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.js') || file.match(/^index_[a-f0-9]+$/)) {
                try {
                    const c = fs.readFileSync(filePath, 'utf8');
                    // Look for the exact title
                    if (c.includes('AI-Powered Creative Design & Development Studio') || c.includes('Independent AI-powered digital studio')) {
                        console.log(`Found in: ${filePath}`);
                    }
                } catch(e) {}
            }
        }
    });
}

searchMeta('C:/Users/Death_God/Downloads/projects/portfolio');
