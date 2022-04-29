// Modules préents de bases dans nodejs, pas besoin de les npm i
const path = require('path');
const fs = require('fs');

// Ici je trouve les chemins absolus DONE
const cheminAbsoluIndexHtml = path.join(__dirname ,'../assets/index.html');
const cheminAbsoluLogTxt = path.join(__dirname , 'log.txt');

console.log(cheminAbsoluIndexHtml);
console.log(cheminAbsoluLogTxt);

// Ici je les utilise pour lire les fichiers
const contenuIndexHtml = fs.readFileSync(cheminAbsoluIndexHtml, "utf-8");
const contenuLogTxt = String(fs.readFileSync(cheminAbsoluLogTxt));

console.log(contenuIndexHtml);
console.log(contenuLogTxt);

