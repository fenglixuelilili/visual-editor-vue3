import { Message } from "@arco-design/web-vue"

export const convertBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    if (window?.visualSystem?.fileUploadHandler) {
      Message.info('文件上传中，请稍等')
      window.visualSystem.fileUploadHandler(file).then((data: any) => {
        resolve(data.path)
        Message.success('文件上传成功！')
      }).catch((error: any) => {
        Message.error('文件上传失败！')
        reject(error)
      })
    } else {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    }
    
  })
}
