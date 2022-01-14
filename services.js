const path = require('path');
const fs = require('fs');

const __projectDir = process.cwd();

module.exports.initFile = (options) => {
    let indexFile = fs.readFileSync(path.join(__dirname, "./templates/index.js"), "utf8", (err) => {
        if(err) throw err;
    });

    let file = path.join(__projectDir, options.name ? options.name + ".js" : "index.js");

    fs.writeFileSync(file, indexFile, (err) => {
        if(err) throw err;
        console.log("Index file was successfully created");
    });
}

module.exports.createRouter = (name) => {
    let indexFile = fs.readFileSync(path.join(__dirname, "./templates/Router.js"), "utf8", (err) => {
        if(err) throw err;
    });

    if(!fs.existsSync(path.join(__projectDir, 'routes'))) {
        fs.mkdirSync(path.join(__projectDir, 'routes'))
    }
    
    let file = path.join(__projectDir, "routes", name + ".router.js");

    fs.writeFileSync(file, indexFile, (err) => {
        if(err) throw err;
        console.log("Router file was successfully created");
    });
}

module.exports.createController = (name) => {
    let indexFile = fs.readFileSync(path.join(__dirname, "./templates/Controller.js"), "utf8", (err) => {
        if(err) throw err;
    });

    if(!fs.existsSync(path.join(__projectDir, 'controllers'))) {
        fs.mkdirSync(path.join(__projectDir, 'controllers'))
    }
    
    let file = path.join(__projectDir, "controllers", name + ".controller.js");

    indexFile = indexFile.replaceAll('%NAME', name)

    fs.writeFileSync(file, indexFile, (err) => {
        if(err) throw err;
        console.log("Router file was successfully created");
    });
}

module.exports.createModel = (name) => {
    console.log(name)
    let indexFile = fs.readFileSync(path.join(__dirname, "./templates/Model.js"), "utf8", (err) => {
        if(err) throw err;
    });

    if(!fs.existsSync(path.join(__projectDir, 'models'))) {
        fs.mkdirSync(path.join(__projectDir, 'models'))
    }
    
    let file = path.join(__projectDir, "models", name + ".model.js");

    indexFile = indexFile.replaceAll('%NAME', name)

    fs.writeFileSync(file, indexFile, (err) => {
        if(err) throw err;
        console.log("Router file was successfully created");
    });
}