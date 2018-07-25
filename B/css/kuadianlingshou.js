function kuadianlingshoujiemianA(){
	$(".mui-poppicker-btn-ok").click(function(){
		alert()
	})
	var smalls = document.getElementById('small').getElementsByTagName('li');
	var zhanbiPai = document.getElementById('zhanbiPai').getElementsByTagName('li');
	var dianpu = document.getElementById('dianpu').getElementsByTagName('li');
	var URL = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/crossOrgRank/query";
	var params = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":0,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": ""
	};
	
	var data_s = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":1,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": ""
	};
	var dou =0;
	var K = 0;
	var z = 0;
	var I = 0;
	var arr = [];//跨店零售金额列表
	var crr = [];//店名称
	var brr = [];//对店铺总零售占比
	var drr = [];//跨店零售金额
	var err = [];//零售金额
	var frr = [];//零售数量
	var grr = [];//零售单数
	var hrr = [];//跨店零售商品数量
	var irr = [];//跨店零售数量占比
	var jrr = [];//重新使用crr
	var wrr = [];//重新使用crr
	var krr = [];//cross_sal_qty_ratio总零售占比
	var lrr = [];//cross_sal_nos_ratio单数列占比
	var mrr = [];//cross_sal_nos_ratio单数总占比
	var nrr = [];//cross_sal_nos跨店总单数金额
	var orr = [];//sal_nos零售单数
	var prr = [];//sal_qty零售数量
	var qrr = [];//零售单数列表
	var rrr = [];//零售单数占比列表
	var srr = [];
	$.ajax({
		type: 'POST',
		url: URL,
		dataType: 'json',
		data: params,
		success: function(obj) {
			console.log(obj)
			var list = obj.data.list;
			var listX = obj.data.list;
			var summary =obj.data.summary;
			for (var j = 0;j < listX.length; j++) {
				jrr = jrr.concat(listX[j].org_id)
				wrr = wrr.concat(listX[j].org_id)
			}
			for (var i = 0; i < list.length; i++) {
				arr = arr.concat(list[i].cross_sal_amt)
				crr = crr.concat(list[i].org_id)
				srr = srr.concat(list[i].sal_amt)
				brr = brr.concat(list[i].cross_sal_amt_ratio)
				hrr = hrr.concat(list[i].cross_sal_qty)
				irr = irr.concat(list[i].cross_sal_qty_ratio)
				lrr = lrr.concat(list[i].cross_sal_nos_ratio)//左边占比单数
				qrr = qrr.concat(list[i].cross_sal_nos)//右边单数
			}
				orr = orr.concat(summary[0].sal_nos)
				prr =prr.concat(summary[0].sal_qty)
				drr =drr.concat(summary[0].cross_sal_amt)
				err =err.concat(summary[0].sal_amt)
				frr =frr.concat(summary[0].cross_sal_qty)
				krr = krr.concat(summary[0].cross_sal_qty_ratio)
				mrr = mrr.concat(summary[0].cross_sal_nos_ratio)//左边总占比单数
				nrr = nrr.concat(summary[0].cross_sal_nos)//右边总单数
				z = summary[0].cross_sal_amt_ratio/100;
				$('#zhanbi').html(toPercent(z))
				$('#zongdiane').html(summary[0].cross_sal_amt)
				$('#lingshoujine').html(summary[0].sal_amt)
				So()//计算一下
				Shop_money();//跨店零售金额
				Shop_proportion()
				Shop_Id();//跨店的门代号
				SetWid();//设置零售金额所占宽高
				
		}
	})


function Shop_proportion(){
	for (var i = 0; i < brr.length; i++) {
		dou = brr[i]/100;
		$('html .one').append("<li><div style='float:right'>"+toPercent(dou)+"</div></li>")
	}
}
function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}
function Shop_money(){
	for (var i = 0; i < arr.length; i++) {
		$('html .two').append("<li><div>" + arr[i] + "</div></li>")
	}
}
function Shop_Id(){
	for (var i = 0; i < crr.length; i++) {
		$('html .three').append('<li>' + crr[i] + '</li>')//门店的代号
	}
}
function SetWid(){

	for(var i = 0; i < smalls.length; i++) {			
		var di = arr[i] / drr[0];		
		smalls[i].style.width = toPercent(di)	//设置他的宽度
		
	}
	for(var i = 0; i < zhanbiPai.length; i++) {				
		var br =brr[i]/100;
		zhanbiPai[i].style.width = toPercent(br)//设置他的宽度
	}

}
function S(){
	for (var i = 0; i < smalls.length; i++) {
		smalls[i].click(function(){
			alert()
		})
	}
}
function So(){
	var max;
    var maxmiddle;
    for(var i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            if(arr[i]<arr[j]){
　　　　　　　　　 max=arr[j];
                 arr[j]=arr[i];
                 arr[i]=max;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
            }
        }
    }
}
function danshu_l(){
    var max;
    var maxmiddle;
    for(var i=0; i<lrr.length; i++){
        for(var j=i; j<lrr.length; j++){
            if(lrr[i]<lrr[j]){
　　　　　　　　	        　 max=lrr[j];
                 lrr[j]=lrr[i];
                 lrr[i]=max;
                 maxmiddle=wrr[j];
                 wrr[j]=wrr[i];
                 wrr[i]=maxmiddle;
                 maxmiddle=qrr[j];
                 qrr[j]=qrr[i];
                 qrr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < qrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=qrr[i]
					smalls[i].style.width=toPercent(qrr[i]/500)
		}
	}
   for (var i = 0; i < lrr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(lrr[i]/100)
			zhanbiPai[i].style.width = toPercent(lrr[i]/100);
		}
	}
   for (var i = 0; i < wrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=wrr[i]
		}
	}
    
}
function danshu_r(){
	
	var max;
    var maxmiddle;
    for(var i=0; i<qrr.length; i++){
        for(var j=i; j<qrr.length; j++){
            if(qrr[i]<qrr[j]){
　　　　　　　　	        　 max=qrr[j];
                 qrr[j]=qrr[i];
                 qrr[i]=max;
                 maxmiddle=wrr[j];
                 wrr[j]=wrr[i];
                 wrr[i]=maxmiddle;
                 maxmiddle=lrr[j];
                 lrr[j]=lrr[i];
                 lrr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < qrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=qrr[i]
				//	console.log(toPercent(qrr[i]))
					smalls[i].style.width=toPercent(qrr[i]/500);
		}
	}
   for (var i = 0; i < lrr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(lrr[i]/100)
			zhanbiPai[i].style.width = toPercent(lrr[i]/100);
		}
	}
   for (var i = 0; i < wrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=wrr[i]
		}
	}
    
}
function shuliang_r(){
	
	var max;
    var maxmiddle;
    for(var i=0; i<hrr.length; i++){
        for(var j=i; j<hrr.length; j++){
            if(hrr[i]<hrr[j]){
　　　　　　　　	        　 max=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=max;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
                 maxmiddle=irr[j];
                 irr[j]=irr[i];
                 irr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < hrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=hrr[i]
					//console.log(toPercent(hrr[i]/500))
					smalls[i].style.width=toPercent(hrr[i]/500)
		}
	}
   for (var i = 0; i < irr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(irr[i]/100)
			zhanbiPai[i].style.width = toPercent(irr[i]/100);
		}
	}
   for (var i = 0; i < jrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=jrr[i]
		}
	}
    
}
function shuliang_l(){
	
	var max;
    var maxmiddle;
    for(var i=0; i<irr.length; i++){
        for(var j=i; j<irr.length; j++){
            if(irr[i]<irr[j]){
　　　　　　　　	        　 max=irr[j];
                 irr[j]=irr[i];
                 irr[i]=max;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < hrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=hrr[i]
					smalls[i].style.width = toPercent(hrr[i]/500);
					//console.log(hrr[i]/frr[0])
					console.log(toPercent(hrr[i]/frr[0]))
					
		}
	}
   for (var i = 0; i < irr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(irr[i]/100)
			
			zhanbiPai[i].style.width = toPercent(irr[i]/100);
		}
	}
   for (var i = 0; i < jrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=jrr[i]
		}
	}
    
}
function So_zb(){
	var max;
    var maxmiddle;
    for(var i=0; i<brr.length; i++){
        for(var j=i; j<brr.length; j++){
            if(brr[i]<brr[j]){
　　　　　　　　　 max=brr[j];
                 brr[j]=brr[i];
                 brr[i]=max;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
                 maxmiddle=arr[j];
                 arr[j]=arr[i];
                 arr[i]=maxmiddle;
            }
        }
    }
    		
}

$('#zb').click(function(){
			if($("#lsje").html().indexOf("金额")>=0){
				$("html .one li").remove();
				$("html .two li").remove();
				$("html .three li").remove();
			    So_zb()
			    Shop_money();
				Shop_proportion()
				Shop_Id();
				SetWid();
			}else if($("#lsje").html().indexOf("数量")>=0){
				
				shuliang_l();
			}else{
				
				danshu_l();
			}
})
$('#KDmoney').click(function(){
			if($("#lsje").html().indexOf("金额")>=0){
				$("html .one li").remove();
				$("html .two li").remove();
				$("html .three li").remove();
			    So()
			    Shop_money();
				Shop_proportion()
				Shop_Id();
				SetWid();
			}else if($("#lsje").html().indexOf("数量")>=0){
			//	console.log("不能点击")
				shuliang_r();
			}else{
				//console.log("不能点击")
				danshu_r()
			}
			
})
$('#xiala').click(function(){
	var picker = new mui.PopPicker();
		picker.setData([{
		    value: "first",
		    text: "零售金额"
		}, {
		    value: "second",
		    text: "零售数量"
		}, {
		    value: "third",
		    text: "零售单数"
		}])
		//picker.pickers[0].setSelectedIndex(4, 2000);
		picker.pickers[0].setSelectedValue('fourth', 2000);
		picker.show(function(SelectedItem) {
			//console.log(SelectedItem[0].text);
			//$('#lsje').html(SelectedItem[0].text)
			if(SelectedItem[0].text=="零售金额"){
				$('#lsje').html("零售金额："+ err[0])
				$("html .one li").remove();
				$("html .two li").remove();
				$("html .three li").remove();
				So_zb()
				So()
			    Shop_money();
				Shop_proportion()
				Shop_Id();
				SetWid();
			}else if(SelectedItem[0].text=="零售数量"){
				$('#lsje').html("零售数量："+ prr[0])
				$('#qiehuan').html("跨店零售数量")
				$("#zongdiane").html(frr[0])
				$('#qiehuan').html("跨店零售数量")
				$("#zhanbispan").html("店铺数量占比")
				k = krr[0]/100;
				$("#zhanbi").html(toPercent(k));
				shuliang_r();

			}else{
				$('#lsje').html("零售单数："+  orr[0])
				$('#qiehuan').html("跨店零售单数")
				$("#zhanbispan").html("店铺数量单数占比")
				$("#zhanbi").html(mrr[0]+"%");
				$("#zongdiane").html(nrr[0])
				danshu_r();;
			}
			
		})
})
$('#CH').click(function(){
	$("#cehua").show(1000)
	$("#ling").show()
})
$('#ling').click(function(){
	$("#cehua").hide()
	$(this).hide()
})
}


//第二个页面
function kuadianlingshoujiemianB(){
	var smalls = document.getElementById('small').getElementsByTagName('li');
	var zhanbiPai = document.getElementById('zhanbiPai').getElementsByTagName('li');
	var dianpu = document.getElementById('dianpu').getElementsByTagName('li');
	var URL = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/crossOrgRank/query";
	var params = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":1,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": ""
	};
	
	var data_s = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":1,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": ""
	};
	var dou =0;
	var K = 0;
	var z = 0;
	var I = 0;
	var arr = [];//跨店零售金额列表
	var crr = [];//店名称
	var brr = [];//对店铺总零售占比
	var drr = [];//跨店零售金额
	var err = [];//零售金额
	var frr = [];//零售数量
	var grr = [];//零售单数
	var hrr = [];//跨店零售商品数量
	var irr = [];//跨店零售数量占比
	var jrr = [];//重新使用crr
	var wrr = [];//重新使用crr
	var krr = [];//cross_sal_qty_ratio总零售占比
	var lrr = [];//cross_sal_nos_ratio单数列占比
	var mrr = [];//cross_sal_nos_ratio单数总占比
	var nrr = [];//cross_sal_nos跨店总单数金额
	var orr = [];//sal_nos零售单数
	var prr = [];//sal_qty零售数量
	var qrr = [];//零售单数列表
	var rrr = [];//零售单数占比列表
	var srr = [];
	$.ajax({
		type: 'POST',
		url: URL,
		dataType: 'json',
		data: params,
		success: function(obj) {
			console.log(obj)
			var list = obj.data.list;
			var listX = obj.data.list;
			var summary =obj.data.summary;
			for (var j = 0;j < listX.length; j++) {
				jrr = jrr.concat(listX[j].org_id)
				wrr = wrr.concat(listX[j].org_id)
			}
			for (var i = 0; i < list.length; i++) {
				arr = arr.concat(list[i].cross_sal_amt)
				crr = crr.concat(list[i].org_id)
				srr = srr.concat(list[i].sal_amt)
				brr = brr.concat(list[i].cross_sal_amt_ratio)
				hrr = hrr.concat(list[i].cross_sal_qty)
				irr = irr.concat(list[i].cross_sal_qty_ratio)
				lrr = lrr.concat(list[i].cross_sal_nos_ratio)//左边占比单数
				qrr = qrr.concat(list[i].cross_sal_nos)//右边单数
			}
				orr = orr.concat(summary[0].sal_nos)
				prr =prr.concat(summary[0].sal_qty)
				drr =drr.concat(summary[0].cross_sal_amt)
				err =err.concat(summary[0].sal_amt)
				frr =frr.concat(summary[0].cross_sal_qty)
				krr = krr.concat(summary[0].cross_sal_qty_ratio)
				mrr = mrr.concat(summary[0].cross_sal_nos_ratio)//左边总占比单数
				nrr = nrr.concat(summary[0].cross_sal_nos)//右边总单数
				z = summary[0].cross_sal_amt_ratio/100;
				$('#zhanbi').html(toPercent(z))
				$('#zongdiane').html(summary[0].cross_sal_amt)
				$('#lingshoujine').html(summary[0].sal_amt)
				So()//计算一下
				Shop_money();//跨店零售金额
				Shop_proportion()
				Shop_Id();//跨店的门代号
				SetWid();//设置零售金额所占宽高
				
		}
	})


function Shop_proportion(){
	for (var i = 0; i < brr.length; i++) {
		dou = brr[i]/100;
		$('html .one').append("<li><div style='float:right'>"+toPercent(dou)+"</div></li>")
	}
}
function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}
function Shop_money(){
	for (var i = 0; i < arr.length; i++) {
		$('html .two').append("<li><div>" + arr[i] + "</div></li>")
	}
}
function Shop_Id(){
	for (var i = 0; i < crr.length; i++) {
		$('html .three').append('<li>' + crr[i] + '</li>')//门店的代号
	}
}
function SetWid(){

	for(var i = 0; i < smalls.length; i++) {			
		var di = arr[i] / drr[0];		
		smalls[i].style.width = toPercent(di)	//设置他的宽度
		
	}
	for(var i = 0; i < zhanbiPai.length; i++) {				
		var br =brr[i]/100;
		zhanbiPai[i].style.width = toPercent(br)//设置他的宽度
	}

}
function S(){
	for (var i = 0; i < smalls.length; i++) {
		smalls[i].click(function(){
			alert()
		})
	}
}
function So(){
	var max;
    var maxmiddle;
    for(var i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            if(arr[i]<arr[j]){
　　　　　　　　　 max=arr[j];
                 arr[j]=arr[i];
                 arr[i]=max;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
            }
        }
    }
}
function danshu_l(){
    var max;
    var maxmiddle;
    for(var i=0; i<lrr.length; i++){
        for(var j=i; j<lrr.length; j++){
            if(lrr[i]<lrr[j]){
　　　　　　　　	        　 max=lrr[j];
                 lrr[j]=lrr[i];
                 lrr[i]=max;
                 maxmiddle=wrr[j];
                 wrr[j]=wrr[i];
                 wrr[i]=maxmiddle;
                 maxmiddle=qrr[j];
                 qrr[j]=qrr[i];
                 qrr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < qrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=qrr[i]
					smalls[i].style.width=toPercent(qrr[i]/500)
		}
	}
   for (var i = 0; i < lrr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(lrr[i]/100)
			zhanbiPai[i].style.width = toPercent(lrr[i]/100);
		}
	}
   for (var i = 0; i < wrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=wrr[i]
		}
	}
    
}
function danshu_r(){
	
	var max;
    var maxmiddle;
    for(var i=0; i<qrr.length; i++){
        for(var j=i; j<qrr.length; j++){
            if(qrr[i]<qrr[j]){
　　　　　　　　	        　 max=qrr[j];
                 qrr[j]=qrr[i];
                 qrr[i]=max;
                 maxmiddle=wrr[j];
                 wrr[j]=wrr[i];
                 wrr[i]=maxmiddle;
                 maxmiddle=lrr[j];
                 lrr[j]=lrr[i];
                 lrr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < qrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=qrr[i]
				//	console.log(toPercent(qrr[i]))
					smalls[i].style.width=toPercent(qrr[i]/500);
		}
	}
   for (var i = 0; i < lrr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(lrr[i]/100)
			zhanbiPai[i].style.width = toPercent(lrr[i]/100);
		}
	}
   for (var i = 0; i < wrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=wrr[i]
		}
	}
    
}
function shuliang_r(){
	
	var max;
    var maxmiddle;
    for(var i=0; i<hrr.length; i++){
        for(var j=i; j<hrr.length; j++){
            if(hrr[i]<hrr[j]){
　　　　　　　　	        　 max=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=max;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
                 maxmiddle=irr[j];
                 irr[j]=irr[i];
                 irr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < hrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=hrr[i]
					//console.log(toPercent(hrr[i]/500))
					smalls[i].style.width=toPercent(hrr[i]/500)
		}
	}
   for (var i = 0; i < irr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(irr[i]/100)
			zhanbiPai[i].style.width = toPercent(irr[i]/100);
		}
	}
   for (var i = 0; i < jrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=jrr[i]
		}
	}
    
}
function shuliang_l(){
	
	var max;
    var maxmiddle;
    for(var i=0; i<irr.length; i++){
        for(var j=i; j<irr.length; j++){
            if(irr[i]<irr[j]){
　　　　　　　　	        　 max=irr[j];
                 irr[j]=irr[i];
                 irr[i]=max;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
            }
        }
    }
    
	for (var i = 0; i < hrr.length; i++) {
		for (var i = 0; i < smalls.length; i++) {
					smalls[i].innerHTML=hrr[i]
					smalls[i].style.width = toPercent(hrr[i]/500);
					//console.log(hrr[i]/frr[0])
					console.log(toPercent(hrr[i]/frr[0]))
					
		}
	}
   for (var i = 0; i < irr.length; i++) {
		for (var i = 0; i < zhanbiPai.length; i++) {
			zhanbiPai[i].innerHTML=toPercent(irr[i]/100)
			
			zhanbiPai[i].style.width = toPercent(irr[i]/100);
		}
	}
   for (var i = 0; i < jrr.length; i++) {
		for (var i = 0; i < dianpu.length; i++) {
			dianpu[i].innerHTML=jrr[i]
		}
	}
    
}
function So_zb(){
	var max;
    var maxmiddle;
    for(var i=0; i<brr.length; i++){
        for(var j=i; j<brr.length; j++){
            if(brr[i]<brr[j]){
　　　　　　　　　 max=brr[j];
                 brr[j]=brr[i];
                 brr[i]=max;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
                 maxmiddle=arr[j];
                 arr[j]=arr[i];
                 arr[i]=maxmiddle;
            }
        }
    }
    		
}

$('#zb').click(function(){
			if($("#lsje").html().indexOf("金额")>=0){
				$("html .one li").remove();
				$("html .two li").remove();
				$("html .three li").remove();
			    So_zb()
			    Shop_money();
				Shop_proportion()
				Shop_Id();
				SetWid();
			}else if($("#lsje").html().indexOf("数量")>=0){
				
				shuliang_l();
			}else{
				
				danshu_l();
			}
})
$('#KDmoney').click(function(){
			if($("#lsje").html().indexOf("金额")>=0){
				$("html .one li").remove();
				$("html .two li").remove();
				$("html .three li").remove();
			    So()
			    Shop_money();
				Shop_proportion()
				Shop_Id();
				SetWid();
			}else if($("#lsje").html().indexOf("数量")>=0){
			//	console.log("不能点击")
				shuliang_r();
			}else{
				//console.log("不能点击")
				danshu_r()
			}
			
})
$('#xiala').click(function(){
	var picker = new mui.PopPicker();
		picker.setData([{
		    value: "first",
		    text: "零售金额"
		}, {
		    value: "second",
		    text: "零售数量"
		}, {
		    value: "third",
		    text: "零售单数"
		}])
		//picker.pickers[0].setSelectedIndex(4, 2000);
		picker.pickers[0].setSelectedValue('fourth', 2000);
		picker.show(function(SelectedItem) {
			//console.log(SelectedItem[0].text);
			//$('#lsje').html(SelectedItem[0].text)
			if(SelectedItem[0].text=="零售金额"){
				$('#lsje').html("零售金额："+ err[0])
				$("html .one li").remove();
				$("html .two li").remove();
				$("html .three li").remove();
				So_zb()
				So()
			    Shop_money();
				Shop_proportion()
				Shop_Id();
				SetWid();
			}else if(SelectedItem[0].text=="零售数量"){
				$('#lsje').html("零售数量："+ prr[0])
				$('#qiehuan').html("跨店零售数量")
				$("#zongdiane").html(frr[0])
				$('#qiehuan').html("跨店零售数量")
				$("#zhanbispan").html("店铺数量占比")
				k = krr[0]/100;
				$("#zhanbi").html(toPercent(k));
				shuliang_r();

			}else{
				$('#lsje').html("零售单数："+  orr[0])
				$('#qiehuan').html("跨店零售单数")
				$("#zhanbispan").html("店铺数量单数占比")
				$("#zhanbi").html(mrr[0]+"%");
				$("#zongdiane").html(nrr[0])
				danshu_r();;
			}
			
		})
})
$('#CH').click(function(){
	$("#cehua").show(1000)
	$("#ling").show()
})
$('#ling').click(function(){
	$("#cehua").hide()
	$(this).hide()
})
}

