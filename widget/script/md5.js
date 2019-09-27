//MD5加密
	function MD5PassWord(data){
		var signature = api.require('signature');
		var value = signature.md5Sync({
		    data: data
		});
		
			//alert(value.toLocaleLowerCase());
			return value;

	}