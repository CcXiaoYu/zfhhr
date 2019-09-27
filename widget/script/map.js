//高德地图
				//位置json
					var $location={};
				function aMapLBS(callback){
					//经纬度变量
					var lons,
						lats;
					var aMapLBS = api.require('aMapLBS');
						aMapLBS.configManager({
						    accuracy: 'hundredMeters',
						    filter: 1
						}, function(ret, err) {
						    if (ret.status) {
						        //alert('定位管理器初始化成功！');
						  		//获取经纬度
						  		var aMapLBS = api.require('aMapLBS');
									aMapLBS.singleLocation({
									    timeout: 10
									}, function(ret, err) {
										if(ret){
										  alert(JSON.stringify(ret));
									    if (ret.status) {
									      
									        //经度
									        lons=ret.lon;
									         //纬度
									        lats=ret.lat;

									        //获取具体位置
									aMapLBS.singleAddress({
										    timeout: 10
										}, function(ret, err) {
										    if (ret.status) {
										        alert(JSON.stringify(ret));
										       
										        //国家
										        $location.country=ret.address.country;
										         //省
										         $location.province=ret.address.province;
										         //市
										         $location.city=ret.address.city;
										         //区
										         $location.district=ret.address.district;
										         //街道
										         $location.street=ret.address.street;
										         //详细地址
										         $location.formattedAddress=ret.address.formattedAddress;
										         //经度
										         $location.lon=lons;
										         //纬度
										         $location.lat=lats;
												//提交到服务器
												callback(ret,$location);
										       	//postToSever();
										    }
										});
									    }
									    }else{
									    	alert(JSON.stringify(err));
									    }
									});
						    }
						});

				}
				//把位置信息提交到服务器
				function postToSever(){
					//alert(JSON.stringify($location));
					apiAjax('EasyApp/LoginLog/getLoginInformation',{bid:$bid,location:$location},postToSeverSuccess);
				}
				//提交服务器成功
				function postToSeverSuccess(ret,err){
//					if(ret){
//						alert(JSON.stringify(ret));
//					}else{
//						alert(JSON.stringify(err));
//
//					}
//
						return false;
				}