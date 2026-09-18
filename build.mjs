import * as babel from '@babel/standalone';
import fs from 'fs';
const files=['data.jsx','data2.jsx','data3.jsx','data4.jsx','data5.jsx','period.jsx','ui.jsx','pages-1.jsx','pages-2.jsx','pages-3.jsx','pages-4.jsx','pages-5.jsx','pages-6.jsx','app.jsx'];
let out='';
for(const f of files){
  const src=fs.readFileSync('./src/'+f,'utf8');
  try{ out+=`\n/* ==== ${f} ==== */\n`+babel.transform(src,{presets:[['react',{runtime:'classic'}]],filename:f}).code+'\n';
    console.log('compiled',f);
  }catch(e){ console.error('FAIL',f,e.message); process.exit(1); }
}
fs.writeFileSync('./vendor/app.bundle.js','(function(){\n'+out+'\n})();');
console.log('bundle bytes',out.length);
