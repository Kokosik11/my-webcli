#!/usr/bin/env node

const commander = require('commander');
const program = commander.program;

const services = require('./services');

const __projectDir = process.cwd();

program.version('0.0.1');

program
    .option('-d --dir', 'output current directory')

program
    .command('init')
    .option('-n --name <name>', 'input name for index file')
    .action((options) => services.initFile(options));

program
    .command('create')
    .alias('cr')
    .addArgument(new commander.Argument('<type>', 'choice type for you file').choices(['router', 'r', 'controller', 'c', 'model', 'm', 'full', 'f']))
    // .argument('<type>')
    .argument('<name>', 'name for your file(-s)')
    .action((type, name) => {
        if(type === "router" || type === "r") services.createRouter(name);
        if(type === "controller" || type === "c") services.createController(name);
        if(type === "model" || type === "m") services.createModel(name);
        if(type === "full" || type === "f") {
            services.createRouter(name);
            services.createController(name);
            services.createModel(name);
        }
    })

program.parse(process.argv);

const options = program.opts();

if(options.dir) console.log(__projectDir);