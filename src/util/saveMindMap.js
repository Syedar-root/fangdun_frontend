// const cordova = window.cordova;

// export const requestWriteExternalStoragePermission = () => {
// 	return new Promise((resolve, reject) => {
// 		document.addEventListener('deviceready', () => {
// 			const permissions = cordova.plugins.permissions;
// 			permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, (status) => {
// 				if (status.hasPermission) {
// 					console.log('已获取写入外部存储权限' + cordova);
// 					resolve();
// 				} else {
// 					console.log('未获取写入外部存储权限');
// 					reject(new Error('未获取写入外部存储权限' + cordova));
// 				}
// 			});
// 		}, false);
// 	});
// };

// export const saveDataURLToLocal = (dataURL) => {
// 	return new Promise((resolve, reject) => {
// 		// 解析DataURL获取文件类型（例如image/png、image/jpeg等）
// 		const dataUrlParts = dataURL.split(',');
// 		const mimeType = dataUrlParts[0].match(/:(.*?);/)[1];
// 		const fileExtension = mimeType === 'image/png' ? '.png' : '.jpg';
// 		// 生成文件名（这里简单用时间戳举例，可按需修改）
// 		const fileName = Date.now() + fileExtension;
// 		// 获取合适的本地存储路径，不同平台有不同的根目录
// 		let dirPath;
// 		if (window.cordova && window.cordova.platformId === 'android') {
// 			dirPath = window.cordova.file.externalDataDirectory;
// 		} else if (window.cordova && window.cordova.platformId === 'ios') {
// 			dirPath = window.cordova.file.documentsDirectory;
// 		} else {
// 			return reject(new Error('Cordova未正确初始化或者不支持的平台'));
// 		}
// 		// 将Base64编码的DataURL数据转换为二进制数据（用于保存文件）
// 		const byteCharacters = atob(dataUrlParts[1]);
// 		const byteArrays = [];
// 		for (let offset = 0; offset < byteCharacters.length; offset += 512) {
// 			const slice = byteCharacters.slice(offset, offset + 512);
// 			const byteNumbers = new Array(slice.length);
// 			for (let i = 0; i < slice.length; i++) {
// 				byteNumbers[i] = slice.charCodeAt(i);
// 			}
// 			const byteArray = new Uint8Array(byteNumbers);
// 			byteArrays.push(byteArray);
// 		}
// 		const blob = new Blob(byteArrays, {
// 			type: mimeType
// 		});
// 		// 保存文件到本地路径
// 		window.resolveLocalFileSystemURL(dirPath, (dirEntry) => {
// 			dirEntry.getFile(fileName, {
// 				create: true
// 			}, (fileEntry) => {
// 				fileEntry.createWriter((fileWriter) => {
// 					fileWriter.onwriteend = () => {
// 						console.log('文件保存成功');
// 						const filePath = dirPath + fileName;
// 						resolve({
// 							filePath,
// 							fileName
// 						}); // 成功时resolve返回包含文件路径和文件名的对象
// 					};
// 					fileWriter.onerror = (error) => {
// 						console.log('保存文件出错：', error);
// 						reject(error);
// 					};
// 					fileWriter.write(blob);
// 				});
// 			});
// 		});
// 	});
// };

const cordova = window.cordova;

// 请求写入外部存储权限的函数
export const requestWriteExternalStoragePermission = () => {
    return new Promise((resolve, reject) => {
        document.addEventListener('deviceready', () => {
            const permissions = cordova.plugins.permissions;
            permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, (status) => {
                if (status.hasPermission) {
                    console.log('已获取写入外部存储权限' + cordova);
                    resolve();
                } else {
                    console.log('未获取写入外部存储权限');
                    reject(new Error('未获取写入外部存储权限' + cordova));
                }
            });
        }, false);
    });
};

// 保存数据（可以是图片DataURL或者md文件内容等）到本地的函数
export const saveDataURLToLocal = (data, fileName) => {
    return new Promise((resolve, reject) => {
        const fileExtension = fileName.split('.').pop().toLowerCase();
        let mimeType;
        let blob;
        if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg') {
            mimeType = fileExtension === 'png'? 'image/png' : 'image/jpeg';
            // 对于图片DataURL，先按原逻辑解析处理
            const dataUrlParts = data.split(',');
            const byteCharacters = atob(dataUrlParts[1]);
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
            blob = new Blob(byteArrays, {
                type: mimeType
            });
        } else if (fileExtension ==='md') {
            mimeType = 'text/markdown';
            blob = new Blob([data], { type: mimeType });
        } else {
            return reject(new Error('不支持的文件类型'));
        }

        // 获取合适的本地存储路径，不同平台有不同的根目录
        let dirPath;
        if (window.cordova && window.cordova.platformId === 'android') {
            dirPath = window.cordova.file.externalDataDirectory;
        } else if (window.cordova && window.cordova.platformId === 'ios') {
            dirPath = window.cordova.file.documentsDirectory;
        } else {
            return reject(new Error('Cordova未正确初始化或者不支持的平台'));
        }

        window.resolveLocalFileSystemURL(dirPath, (dirEntry) => {
            dirEntry.getFile(fileName, {
                create: true
            }, (fileEntry) => {
                fileEntry.createWriter((fileWriter) => {
                    fileWriter.onwriteend = () => {
                        console.log('文件保存成功');
                        const filePath = dirPath + fileName;
                        resolve({
                            filePath,
                            fileName
                        }); // 成功时resolve返回包含文件路径和文件名的对象
                    };
                    fileWriter.onerror = (error) => {
                        console.log('保存文件出错：', error);
                        reject(error);
                    };
                    fileWriter.write(blob);
                });
            });
        });
    });
};