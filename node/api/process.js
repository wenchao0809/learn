 const {exec} = require('child_process');
 
 exec('echo "\\$HOME 变量为 $HOME"', (err, out) => {
   console.log(out)
 });

 console.log(1)
