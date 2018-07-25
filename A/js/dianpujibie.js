     var abc = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/params/queryOrgLevel/query";
     	var params = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":0,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": ""
	};
    var cx_e=[];
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
			//console.log(obj)
			var list = obj.data.list;
        
			for (var i = 0; i < list.length; i++) {
				cx_e = cx_e.concat(list[i].org_level_nm)
			}	
			//chaxun_four()
			
			var dian=cx_e.length;
			
             $("#store div").bind("click",function(){
			let index = $(this).index();
            if(index!=0){
				if($("#store .pinpai").eq(index).hasClass('mypinpai')){
				    $("#store .pinpai").eq(index).removeClass('mypinpai');
			     }
				 else{
					 	$("#store .pinpai").eq(index).addClass('mypinpai');
				 }
					
			}
			else{
				if($("#store .pinpai").eq(0).hasClass('mypinpai')){
				    $("#store .pinpai").removeClass('mypinpai');
			     }
				 else{
					$("#store .pinpai").addClass('mypinpai');
				 }
				
			}
			    var istrue=false;
				var isfalse=false;
				var j=1;
				for(j=1;j<dian;j++){
					if(!($("#store .pinpai").eq(j).hasClass('mypinpai'))){
						istrue=true;
					}
				
				}
				if(istrue==false&&j==dian){
					$("#store .pinpai").eq(0).addClass('mypinpai');
					}
            
             if(index!=0){
             	if($("#store .pinpai").eq(index).hasClass('mypinpai')&&$("#store .pinpai").eq(0).hasClass('mypinpai')){
             		$("#store .pinpai").eq(0).addClass('mypinpai')
             	}else{		
             		$("#store .pinpai").eq(0).removeClass('mypinpai');
             	}
             }
        })
		}
	})
//	function chaxun_four(){
//	for (var i = 0; i < cx_e.length; i++) {
//		$('html #store').append('<div class="pinpai"><span>' + cx_e[i] + '</span></div>')//门店的代号
//	}
//}