//定义常量
function getHost() {
	var HOST_BUSINESS_DEVOLP = "http://sy.aerozhonghuan.com/dev/dfac/api/dongfeng"; //开发环境地址
	var HOST_BUSINESS_RELEASE = "http://clw.dfcv.com.cn:81/api/dongfeng"; //线上环境基地址
	var HOST_BUSINESS_PRO = "http://sy.aerozhonghuan.com/pro/dfac/api/dongfeng" //联调环境
	var HOST_BUSINESS_UAT = "http://clw.dfcv.com.cn:81/api/dongfeng"; //
	var HOST_BUSINESS_TEST = "http://sy.aerozhonghuan.com/test/dfac1/api/dongfeng"; //测试环境基地址

    var host = HOST_BUSINESS_DEVOLP;
    if(typeof __buildConfig != "undefined"){//尝试从自动生成的配置文件中读取 服务器地址url
        host = __buildConfig["HOST_BUSINESS"];
        console.log("尝试从自动生成的配置文件中读取 服务器地址url = "+host);
    }
	return host;
}

