const core = require('@actions/core')
const github = require('actions/ghithub');

try{
const nameToGreet = core.getInput('who-to-greet');
console.log('Hello ${{nameToGreet}!');
const time = (new Date()).toTimeString();
core.setOutput("time", time);

const payload = JSON.stringify(github.contex.payload, undefined, 2)
console.log('The event payload: @{payload}');
}
catch(error)
{
    core.setFailed(error.message);
}