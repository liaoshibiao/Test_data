     var abc = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/params/queryOrgBrd/query";
     	var params = {
		"userId": '15975531236'
	};
    var cx_d=[];
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
			var x = obj.data.list
			for (var i = 0; i < x.length; i++) {
				console.lo
			}
			var list = obj.data.list;
			for (var i = 0; i < list.length; i++) {
				cx_d = cx_d.concat(list[i].org_brd_nm)
			}	
			var pingpai=cx_d.length;
              //品牌
	        $("#brand div").bind("click",function(){
				let index = $(this).index();
	            if(index!=0){
					if($("#brand .pinpai").eq(index).hasClass('mypinpai')){
					    $("#brand .pinpai").eq(index).removeClass('mypinpai');
					   
				     }
					 else{
						 	$("#brand .pinpai").eq(index).addClass('mypinpai');
					 }
						
				}
				else{
					if($("#brand .pinpai").eq(0).hasClass('mypinpai')){
					    $("#brand .pinpai").removeClass('mypinpai');
				     }
					 else{
						$("#brand .pinpai").addClass('mypinpai');
					 }
					
				}
				    var istrue=false;
					var isfalse=false;
					var j=1;
					for(j=1;j<pingpai;j++){
						if(!($("#brand .pinpai").eq(j).hasClass('mypinpai'))){
							istrue=true;
						}
					
					}
					if(istrue==false&&j==pingpai){
						$("#brand .pinpai").eq(0).addClass('mypinpai');
						}
	            
	             if(index!=0){
	             	if($("#brand .pinpai").eq(index).hasClass('mypinpai')&&$("#brand .pinpai").eq(0).hasClass('mypinpai')){
	             		$("#brand .pinpai").eq(0).addClass('mypinpai')
	             	}else{		
	             		$("#brand .pinpai").eq(0).removeClass('mypinpai');
	             	}
	             }
	        })
		}
	})
