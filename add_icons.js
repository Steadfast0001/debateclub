const fs = require('fs');
const files = ['public/index.html', 'public/news.html', 'public/register.html', 'public/admin.html'];
const iconTag = '<link rel="icon" type="image/png" href="/images/favicon.png">';

files.forEach(f => {
    if (fs.existsSync(f)) {
        let t = fs.readFileSync(f, 'utf8');
        if (!t.includes('rel="icon"')) {
            t = t.replace('</head>', `  ${iconTag}\n</head>`);
            fs.writeFileSync(f, t);
            console.log('Added icon to ' + f);
        } else {
            console.log('Icon already exists in ' + f);
        }
    }
});
