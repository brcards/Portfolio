const mkdirp = require('mkdirp');
const fileSystem = require('fs');
const Handlebars = require("handlebars");

const moduleDirectory = "src/modules/";
const templateDirectory = "scripts/CreateModule/templates/";

const templates = [
    {
        templateFileName: "indexTemplate.txt",
        generatedFileName: () => {return "index.js"}
    },
    {
        templateFileName: "mainTemplate.txt",
        generatedFileName: (moduleName) => {return moduleName + ".js"}
    },
    {
        templateFileName: "testTemplate.txt",
        generatedFileName: (moduleName) => {return moduleName + ".test.js"}
    }
];

/**
 * Creates templates for a new module
 */
(function main() {
    if(!process.argv[2]) {
        throw new Error('Please provide a module name');
    }

    let moduleName = process.argv[2];

    mkdirp(moduleDirectory + moduleName)
        .then(() => createFiles(moduleName))
        .catch(error => {
            throw new Error("Creating module directory failed, error:" + error);
        });
})();

function createFiles(moduleName) {
    for (let template of templates) {
        createModuleFile(template.generatedFileName(moduleName),
            moduleName,
            () => getTemplateContentFromFile(template.templateFileName, moduleName));
    }
}

function createModuleFile(fileName, moduleName,  getContent) {
    fileSystem.writeFile(moduleDirectory + moduleName + "/" + fileName, getContent(), error => {
        if(error) {
            throw new Error("Failed to create module file: " + error);
        }
    });
}

function getTemplateContentFromFile(templateFile, moduleName){
    const content = fileSystem.readFileSync(templateDirectory + templateFile, 'utf8');
    const template = Handlebars.compile(content);
    return template({moduleName: moduleName});
}