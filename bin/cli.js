#!/usr/bin/env node

const { program } = require('commander');
const { compileCircuit } = require('../lib/compile');
const { testCircuit } = require('../lib/test');
const { deployVerifier } = require('../lib/deploy');
const { verifyProof } = require('../lib/verify');

program
  .command('compile <circomFilePath>')
  .description('Compile a circom circuit')
  .action((circomFilePath) => {
    compileCircuit(circomFilePath);
  });

  program
  .command('test <folder> <inputJson>')
  .description('Test the circuit with input.json and generate proof/public.json')
  .action((folder, inputJson) => {
    testCircuit(folder, inputJson);
  });

  program
  .command('deploy <folder> <privateKey>')
  .description('Deploy verifier.sol in folder to Ethereum using provided private key')
  .option('--rpc <rpcUrl>', 'Custom RPC endpoint (for Orbit or local chains)')
  .action((folder, privateKey, options) => {
    deployVerifier(folder, privateKey, options);
  });


  program.parse(process.argv);


module.exports = {
  verifyProof
};    