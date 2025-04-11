const fs = require('fs');
const path = require('path');

const directory = './'; // Root directory of your project
const requiredIncludes = ['partials/header.html', 'partials/footer.html'];

function checkHTMLConsistency(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            checkHTMLConsistency(fullPath);
        } else if (file.endsWith('.html')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            requiredIncludes.forEach(include => {
                if (!content.includes(include)) {
                    console.log(`Missing include "${include}" in file: ${fullPath}`);
                }
            });
        }
    });
}

// Consider adding more checks (e.g., against required meta tags, or consistent AOS attributes).

checkHTMLConsistency(directory);
