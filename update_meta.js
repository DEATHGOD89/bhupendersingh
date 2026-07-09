const fs = require('fs');
const path = require('path');

function replaceMeta(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'about_removed') {
                replaceMeta(filePath);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.js') || file.match(/^index_[a-f0-9]+$/)) {
                try {
                    let c = fs.readFileSync(filePath, 'utf8');
                    let modified = false;

                    const title1 = /Bhupender Singh \| AI-Powered Creative Design &amp; Development Studio/g;
                    const title2 = /Bhupender Singh \| AI-Powered Creative Design & Development Studio/g;
                    const titleReplacement = 'Bhupender Singh | AI Full Stack Developer';
                    const titleReplacementEscaped = 'Bhupender Singh | AI Full Stack Developer';

                    if (c.match(title1) || c.match(title2)) {
                        c = c.replace(title1, titleReplacementEscaped);
                        c = c.replace(title2, titleReplacement);
                        modified = true;
                    }

                    const desc1 = /Independent AI-powered digital studio crafting premium brand experiences through strategy, design, and technology\./g;
                    const descReplacement = 'AI Full Stack Developer crafting premium digital experiences through strategy, design, and technology.';
                    
                    if (c.match(desc1)) {
                        c = c.replace(desc1, descReplacement);
                        modified = true;
                    }

                    if (modified) {
                        fs.writeFileSync(filePath, c);
                        console.log(`Updated meta in: ${filePath}`);
                    }
                } catch(e) {}
            }
        }
    });
}

replaceMeta('C:/Users/Death_God/Downloads/projects/portfolio');
