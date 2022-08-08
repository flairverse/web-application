const { writeFile } = require('fs')
const jsonFile = require('../package.json')

const newPathArg = process.argv.filter(arr => arr.includes('--path'))[0]
if (!newPathArg) {
  console.log('please provide the new path of json result output via --path=path/to/file.json')
}

const newPath = newPathArg.split('=')?.[1]
if (!newPath) {
  console.log('please provide a valid path like --path=path/to/file.json')
}

const scripts = ['jest:run', 'jest:watch', 'jest:ci', 'beautify:jest-result']

const currentPath = jsonFile.scripts['jest:run']
  .split(' ')
  .filter(arr => arr.includes('--outputFile'))[0]
  .split('=')[1]

for (const script of scripts) {
  jsonFile.scripts[script] = jsonFile.scripts[script].replace(currentPath, newPath)
}

writeFile('./package.json', JSON.stringify(jsonFile, null, 2), console.log)
