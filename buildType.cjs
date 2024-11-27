const fs = require("fs")
const path = require("path")
function copyFile(source, destination, callback) {
  const readStream = fs.createReadStream(source)
  const writeStream = fs.createWriteStream(destination)
  readStream.on("error", callback)
  writeStream.on("error", callback)
  writeStream.on("close", () => {
    callback(null)
  })
  readStream.pipe(writeStream)
}
const sourcePath = path.join(__dirname, "./src/types/index.d.ts") // 源文件路径
const destPath = path.join(__dirname, "visualEditor", "index.d.ts") // 目标文件路径
copyFile(sourcePath, destPath, (err) => {
  if (err) {
    console.error("An error occurred:", err)
    return
  }
  console.log("File copied successfully")
})
