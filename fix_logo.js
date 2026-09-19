const fs = require('fs');
const files = ['public/index.html', 'public/news.html', 'public/register.html', 'public/admin.html'];

files.forEach(f => {
    let t = fs.readFileSync(f, 'utf8');
    t = t.replace('<img id="schoolLogo" alt="BIAKA University Institute of Buea logo">', 
                  '<img id="schoolLogo" src="/images/favicon.png" alt="BIAKA University Institute of Buea logo">');
    fs.writeFileSync(f, t);
    console.log('Fixed logo in ' + f);
});

let appJs = fs.readFileSync('public/app.js', 'utf8');
appJs = appJs.replace('document.querySelector("#schoolLogo").src = `data:image/jpeg;base64,${logoData}`;', '// document.querySelector("#schoolLogo").src = `data:image/jpeg;base64,${logoData}`;');
fs.writeFileSync('public/app.js', appJs);
console.log('Fixed app.js');
