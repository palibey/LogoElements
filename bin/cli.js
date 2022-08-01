#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    }catch (e) {
        console.log('error');
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/palibey/LogoElements ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log('cloning');

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut)
    process.exit(-1);
console.log('installing dep');

const installedDeps = runCommand(installDepsCommand)
if (!installedDeps)
    process.exit(-1);
console.log('done');
console.log(`cd ${repoName} && npm start`)