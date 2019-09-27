/**
 * 获取调用参数
 * @param argument 调用必传 固定值：arguments
 * @param idx 第几个参数 0为第一个 递推
 * @param defaultVal 如果调用没传这个参数则返回这个默认值
 */
function getArguments(argument,idx,defaultVal){
	if(argument[idx] == undefined || argument[idx] == '' || argument[idx] == null){
		return defaultVal;
	}else{
		return argument[idx];
	}
}
