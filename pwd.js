// process.stdin.on('data', function pwd(data){
//   const cmd = data.toString().trim();

//   if(cmd === 'pwd') {
//     process.stdout.write(`${process.cwd()} \nprompt > `);
//   }
//   else {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//   }
// });


function pwd(){
    process.stdout.write(`${process.cwd()} \nprompt > `); 
}

module.exports = { pwd }
