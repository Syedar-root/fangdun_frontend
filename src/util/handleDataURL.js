export function parseDataURL(dataURL) {
  const result = {
    mediaType: '', // 数据的媒体类型，比如 'image/png' 等
    isBase64Encoded: false, // 是否是base64编码
    content: null // 解析后的数据内容，文本就是原始文本，图片等就是Blob对象等
  };

  // 拆分dataURL获取各个部分
  const parts = dataURL.split(',');
  if (parts.length === 2) {
    const meta = parts[0].split(';');
    const mediaTypeWithEncoding = meta[0].split(':')[1];
    result.mediaType = mediaTypeWithEncoding.split(';')[0];
    result.isBase64Encoded = meta.some(item => item === 'base64');

    // 对于文本类型（比如md文件），不管是否标记base64，都直接返回原始文本内容
    if (result.mediaType.startsWith('text/')) {
      result.content = parts[1];
    } else if (result.isBase64Encoded) {
      // 如果是base64编码（非文本类型，比如图片等），处理为Blob对象
      const byteCharacters = atob(parts[1]);
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      result.content = new Blob(byteArrays, { type: result.mediaType });
    } else {
      // 如果是非base64编码的非文本类型，目前暂按原始内容返回（可按需扩展处理逻辑）
      result.content = parts[1];
    }
  }

  return result;
}