
	function refresh(callback){
	api.setCustomRefreshHeaderInfo({
            bgColor: 'rgba(0,0,0,0)',
            refreshHeaderHeight : 60 ,                                     //(可选项)数字类型；下拉高度达到一定阈值；默认：60(该参数只支持ios)
    		loadAnimInterval : 80 ,
            image: {
	            pull: [
	                // 'widget://image/refresh/refresh_1.png',
	                // 'widget://image/refresh/refresh_2.png',
	                // 'widget://image/refresh/refresh_3.png',
	                // 'widget://image/refresh/refresh_4.png',
	                // 'widget://image/refresh/refresh_5.png',
	                // 'widget://image/refresh/refresh_6.png',
	                // 'widget://image/refresh/refresh_7.png',
	                // 'widget://image/refresh/refresh_8.png',
	                // 'widget://image/refresh/refresh_9.png',
	                // 'widget://image/refresh/refresh_10.png'
									'widget://image/refresh/refresh_1.png',
									'widget://image/refresh/refresh_2.png',
									'widget://image/refresh/refresh_3.png'
									// 'widget://image/refresh/refresh_4.png',
									// 'widget://image/refresh/refresh_5.png'
	        	],
            load: [
	            	// 'widget://image/refresh/refresh_1.png',
	              //   'widget://image/refresh/refresh_2.png',
	              //   'widget://image/refresh/refresh_3.png',
	              //   'widget://image/refresh/refresh_4.png',
	              //   'widget://image/refresh/refresh_5.png',
	              //   'widget://image/refresh/refresh_6.png',
	              //   'widget://image/refresh/refresh_7.png',
	              //   'widget://image/refresh/refresh_8.png',
	              //   'widget://image/refresh/refresh_9.png',
	              //   'widget://image/refresh/refresh_10.png'
								'widget://image/refresh/refresh_1.png',
								'widget://image/refresh/refresh_2.png',
								'widget://image/refresh/refresh_3.png'
								// 'widget://image/refresh/refresh_4.png',
								// 'widget://image/refresh/refresh_5.png'
	        ]}
        }, function() {
                //下拉刷新被触发，自动进入加载状态，使用 api.refreshHeaderLoadDone() 手动结束加载中状态
                //下拉刷新被触发，使用 api.refreshHeaderLoadDone() 结束加载中状态
               		callback();
            });
      }

 function fnRefreshHeaderLoading(){
        	api.refreshHeaderLoading();
        }
