     var abc = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/params/queryOrgInfo/query";
     	var params = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":0,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": ""
	};
    var cx_a=[];
    var cx_b=[];
    var cx_c=[];
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
//			console.log(obj)
			var list = obj.data.list;
			
			for (var i = 0; i < list.length; i++) {
				cx_a = cx_a.concat(list[i].areaname1)
				cx_b = cx_b.concat(list[i].areaname2)
				cx_c = cx_c.concat(list[i].areaname3)
			}	
			chaxun_one()
			chaxun_two()
			chaxun_three()
				//管辖区域第一层
			    var gxq_one=cx_a.length;
				 //管辖区域第二层
			    var gxq_two=cx_b.length;
			    //管辖区域第三层
			    var gxq_whree=cx_c.length;
			//管辖区域第一层
			  $("#managementup div").bind("click",function(){
						let index = $(this).index();
			            if(index!=0){
							if($("#managementup .pinpai").eq(index).hasClass('mypinpai')){
							    $("#managementup .pinpai").eq(index).removeClass('mypinpai');
						     }
							 else{
								 	$("#managementup .pinpai").eq(index).addClass('mypinpai');
							 }
								
						}
						else{
							if($("#managementup .pinpai").eq(0).hasClass('mypinpai')){
							    $("#managementup .pinpai").removeClass('mypinpai');
						     }
							 else{
								$("#managementup .pinpai").addClass('mypinpai');
							 }
							
						}
						    var istrue=false;
							var isfalse=false;
							var j=1;
							for(j=1;j<gxq_one;j++){
								if(!($("#managementup .pinpai").eq(j).hasClass('mypinpai'))){
									istrue=true;
								}
							
							}
							if(istrue==false&&j==gxq_one){
								$("#managementup .pinpai").eq(0).addClass('mypinpai');
								}
			            
			             if(index!=0){
			             if($("#managementup .pinpai").eq(index).hasClass('mypinpai')&&$("#managementup .pinpai").eq(0).hasClass('mypinpai')){
			             		$("#managementup .pinpai").eq(0).addClass('mypinpai')
			             	}else{		
			             		$("#managementup .pinpai").eq(0).removeClass('mypinpai');
			             	}
			             }
			        })
			
			//管辖区域第二层
			  $("#managementmiddle div").bind("click",function(){
						let index = $(this).index();
			            if(index!=0){
							if($("#managementmiddle .pinpai").eq(index).hasClass('mypinpai')){
							    $("#managementmiddle .pinpai").eq(index).removeClass('mypinpai');
						     }
							 else{
								 	$("#managementmiddle .pinpai").eq(index).addClass('mypinpai');
							 }
								
						}
						else{
							if($("#managementmiddle .pinpai").eq(0).hasClass('mypinpai')){
							    $("#managementmiddle .pinpai").removeClass('mypinpai');
						     }
							 else{
								$("#managementmiddle .pinpai").addClass('mypinpai');
							 }
							
						}
						    var istrue=false;
							var isfalse=false;
							var j=1;
							for(j=1;j<gxq_two;j++){
								if(!($("#managementmiddle .pinpai").eq(j).hasClass('mypinpai'))){
									istrue=true;
								}
							
							}
							if(istrue==false&&j==gxq_two){
								$("#managementmiddle .pinpai").eq(0).addClass('mypinpai');
								}
			            
			             if(index!=0){
			             	if($("#managementmiddle .pinpai").eq(index).hasClass('mypinpai')&&$("#managementmiddle .pinpai").eq(0).hasClass('mypinpai')){
			             		$("#managementmiddle .pinpai").eq(0).addClass('mypinpai')
			             	}else{		
			             		$("#managementmiddle .pinpai").eq(0).removeClass('mypinpai');
			             	}
			             }
			        })
			
			//管辖区域第三层
			  $("#managementdown div").bind("click",function(){
						let index = $(this).index();
			            if(index!=0){
							if($("#managementdown .pinpai").eq(index).hasClass('mypinpai')){
							    $("#managementdown .pinpai").eq(index).removeClass('mypinpai');
						     }
							 else{
								 	$("#managementdown .pinpai").eq(index).addClass('mypinpai');
							 }
								
						}
						else{
							if($("#managementdown .pinpai").eq(0).hasClass('mypinpai')){
							    $("#managementdown .pinpai").removeClass('mypinpai');
						     }
							 else{
								$("#managementdown .pinpai").addClass('mypinpai');
							 }
							
						}
						    var istrue=false;
							var isfalse=false;
							var j=1;
							for(j=1;j<gxq_whree;j++){
								if(!($("#managementdown .pinpai").eq(j).hasClass('mypinpai'))){
									istrue=true;
								}
							
							}
							if(istrue==false&&j==gxq_whree){
								$("#managementdown .pinpai").eq(0).addClass('mypinpai');
								}
			            
			             if(index!=0){
			             	if($("#managementdown .pinpai").eq(index).hasClass('mypinpai')&&$("#managementdown .pinpai").eq(0).hasClass('mypinpai')){
			             		$("#managementdown .pinpai").eq(0).addClass('mypinpai')
			             	}else{		
			             		$("#managementdown .pinpai").eq(0).removeClass('mypinpai');
			             	}
			             }
			        })
		}
	})
	function chaxun_one(){
	for (var i = 0; i < cx_a.length; i++) {
		$('html #managementup').append('<div class="pinpai"><span>' + cx_a[i] + '</span></div>')//门店的代号
	}
    }
	function chaxun_two(){
	for (var i = 0; i < cx_b.length; i++) {
		$('html #managementmiddle').append('<div class="pinpai"><span>' + cx_b[i] + '</span></div>')//门店的代号
	}
    }
	function chaxun_three(){
	for (var i = 0; i < cx_c.length; i++) {
		$('html #managementdown').append('<div class="pinpai"><span>' + cx_c[i] + '</span></div>')//门店的代号
	}
    }