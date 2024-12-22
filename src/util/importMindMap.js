import { ElMessage } from "element-plus";

export const requestReadExternalStoragePermission = () => {
	return new Promise((resolve, reject) => {
		document.addEventListener('deviceready', () => {
			const permissions = cordova.plugins.permissions;
			permissions.requestPermission(permissions.READ_EXTERNAL_STORAGE, (status) => {
                if (status.hasPermission) {
                    ElMessage({
                        message: '已获取读外部存储权限',
                        type: 'success',
                        duration: 2500,
                        offset: 45
                    })
					console.log('已获取读外部存储权限' + cordova);
					resolve();
				} else {
                    console.log('未获取写入外部存储权限');
                    ElMessage({
                        message: '未获取写入外部存储权限',
                        type: 'success',
                        duration: 2500,
                        offset: 45
                    })
					reject(new Error('未获取读外部存储权限' + cordova));
				}
			});
		}, false);
	});
};