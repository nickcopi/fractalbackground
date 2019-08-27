const {spawn} = require('child_process');
const subprocess = spawn('node',['bgmaker.js'],{
	detached:true
});
process.exit();
