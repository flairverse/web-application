const { readFile, writeFile } = require('fs')

const filePathArg = process.argv.filter(arr => arr.includes('--path'))[0]
if (!filePathArg) {
  console.log('please provide a path to the file you wanna be beautified via --path=path/to/file.json')
}

const filePath = filePathArg.split('=')?.[1]
if (!filePath) {
  console.log('please provide a valid path like --path=path/to/file.json')
}

const indentArg = process.argv.filter(arr => arr.includes('--indent'))[0]
const indent = parseInt(indentArg?.split('=')?.[1] || '4')

readFile(filePath, 'utf8', (error, content) => {
  if (error) {
    console.log(error)
    return
  }
  if (!content) {
    console.log('nothing found')
    return
  }

  try {
    content = JSON.stringify(JSON.parse(content), null, indent)
    writeFile(filePath, content, err => {
      console.log('error occurred while wring new content to the provided path')
      console.log(err)
    })
  } catch (error) {
    console.log('is not a valid json file')
    console.log(error)
  }
})
