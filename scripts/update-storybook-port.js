const { writeFile } = require('fs')
const jsonFile = require('../package.json')

const {
  ports: { storybook },
} = require('../server/config')

const currentPort = jsonFile.scripts.storybook.split(' ')[2]

jsonFile.scripts.storybook = jsonFile.scripts.storybook.replace(currentPort, storybook)

writeFile('./package.json', JSON.stringify(jsonFile, null, 2), console.log)
