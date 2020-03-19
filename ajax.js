function Ajax(getType){ 
	//创建一个新变量
	var ajax = new Object();

	//判断传递进来的文件类型
	ajax.getType = getType ? getType.toUpperCase() : 'HTML';
	ajax.url = '';//url地址
	ajax.sendContent = '';//发送过来的数据

	// 创建ajax对象
	ajax.getXMLHttpRequest = function(){ 
		//1.自定义局部变量ajax对象
			var aj = false;

			//分两种情况获取

			//1.非IE(除了IE7和IE8)
			if(window.XMLHttpRequest){ 
				//获取ajax对象
				aj = new XMLHttpRequest();
				
				//判断  对部分mozillar浏览器的BUG进行修正
				if(aj.overrideMimeType){ 
					aj.overrideMimeType('text/xml');
				}

			//IE
			}else if(window.ActiveXObject){ 
				//区分不同版本IE浏览器

				var versons = [ 
					'Microsoft.XMLHTTP',
					'MSXML.XMLHTTP',
					'MSXML2.XMLHTTP.3.0',
					'Msxml2.XMLHTTP.4.0',
					'Msxml2.XMLHTTP.5.0',
					'Msxml2.XMLHTTP.6.0',
					'Msxml2.XMLHTTP.7.0'
				];

				//遍历数组
				for(var i=0;i<versons.length;i++){ 
					try{ 
						aj = new ActiveXObject(versons[i]);

						if(aj){ 
							return aj;
						}

					}catch(e){ 
						aj = false;
					}
				}
			}
			return aj;
	};

	ajax.resHandle = '';//回调函数

	//获取ajax的XMLHttpRequest对象
	ajax.XMLHttpRequest = ajax.getXMLHttpRequest();

	//封装ajax的get方法
	ajax.get = function(url,sendContent,resHandle){ 
		//将实参赋值给自定义的ajax对象的url属性
		ajax.url = url;
		// sendContent    {name:'1223',age:10}
		
		// 处理发送过来的信息
		if(typeof sendContent == 'object'){
			var str = '';
			for(var i in sendContent){
				str += i+'='+sendContent[i]+'&';//name=ccc&age=20			
				// console.log(i);
				// console.log(sendContent[i]);
			}
			
			// console.log(str);
			
			// 去除多余的&
			ajax.url = url+'?'+str.substr(0,str.length-1);
		}else{
			ajax.url = url+'?'+sendContent;
		}
		

		//判断resHandle是否为空
		if(resHandle != null){ 
			//将回调函数赋值给全局变量并且使用内部函数去处理
		// 	ajax.XMLHttpRequest.onreadystatechange = function(){ 
		// 	//判断状态值
		// 	if(ajax.XMLHttpRequest.readyState == 4){ 
		// 		if(ajax.XMLHttpRequest.status == 200){ 
		// 			if(ajax.getType == 'HTML'){ 
		// 				//响应ajax 调用reshandle
		// 				ajax.resHandle(ajax.XMLHttpRequest.responseText);
		// 			}
		// 		}
		// 	}
		// };
			ajax.XMLHttpRequest.onreadystatechange = ajax.doHandle;
			// 将传入的回调函数赋值给全局变量ajax.resHandle
			ajax.resHandle = resHandle;
		}

		if(window.XMLHttpRequest){ 
			ajax.XMLHttpRequest.open("get",ajax.url);
			ajax.XMLHttpRequest.send(null);
		}else{ 
			ajax.XMLHttpRequest.open("get",ajax.url,true);
			ajax.XMLHttpRequest.send();
		}
	};

	//处理ajax监听事件
	ajax.doHandle = function(){ 
		//判断状态值
		if(ajax.XMLHttpRequest.readyState == 4){ 
			if(ajax.XMLHttpRequest.status == 200){ 
				if(ajax.getType == 'HTML'){ 
					//响应ajax 调用reshandle
					ajax.resHandle(ajax.XMLHttpRequest.responseText);
				}
			}
		}
	};

	//封装post
	ajax.post = function(url,sendContent,resHandle){ 
		//将实参赋值给变量
		ajax.url = url;
		//判断sendContent是否是对象
		if(typeof sendContent == 'object'){ 
			//是对象
			var str = '';
			//遍历对象  for(var 变量 in obj){}   {name:'sss',age:40}
			for(var i in sendContent){ 
				//变成对象形式的字符串
				// alert(i+sendContent[i]);
				str += i+'='+sendContent[i]+'&'
				// str+=i+"="+sendContent[i]+"&"; //  name=aaa&age=19&
			}
			//去掉最后一个多余的"&"   substr(开始下标,截取个数)从开始下标开始截取，截取指定的个数   lastIndexOf() slice(start,end)
			ajax.sendContent = str.substr(0,str.length-1);
		}else{ 
			//不是对象
			ajax.sendContent = sendContent;
		}

		//处理回调函数

		//判断回调函数是否为空
		if(resHandle != null){ 
			//处理监听事件
			ajax.XMLHttpRequest.onreadystatechange = ajax.doHandle; 
			//将用户传递过来的回调函数交给全局属性
			ajax.resHandle = resHandle;
		}

		//处理ajax的请求
		ajax.XMLHttpRequest.open("post",url,true);
		ajax.XMLHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.XMLHttpRequest.send(ajax.sendContent);
	};
	return ajax;
}

// var ajax = new Ajax();
// console.log(ajax);

// ajax.post("a.php","username=kuikui&age=18",function(data){ 
// 		alert(data);
// });

// ajax.post("a.php",{username:"maimai",age:22},function(data){ 
// 		alert(data);
// });





