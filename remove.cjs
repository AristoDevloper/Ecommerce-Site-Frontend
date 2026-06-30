const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Remove <nav> block
            const navRegex = /(?:\{\/\*.*?\*\/\}\s*)?<nav[^>]*>[\s\S]*?<\/nav>/g;
            if (navRegex.test(content)) {
                content = content.replace(navRegex, '');
                modified = true;
            }

            // Remove <header> block
            const headerRegex = /(?:\{\/\*.*?\*\/\}\s*)?<header[^>]*>[\s\S]*?<\/header>/g;
            if (headerRegex.test(content)) {
                content = content.replace(headerRegex, '');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Modified: ' + fullPath);
            }
        }
    }
}

processDir(path.join(process.cwd(), 'src', 'pages'));
