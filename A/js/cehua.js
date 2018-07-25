 $('#CH').click(function(){
	$("#cehua").show(1000)
	$("#ling").show()
	})
	$('#ling').click(function(){
		$("#cehua").hide()
		$(this).hide()
	})
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
		
			chaxun_one()
			chaxun_two()
			chaxun_three()
					    //经营类别
	
 
 //经营类别
  $("#contentup div").bind("click",function(){
			let index = $(this).index();
            if(index!=0){
				if($("#contentup .pinpai").eq(index).hasClass('mypinpai')){
				    $("#contentup .pinpai").eq(index).removeClass('mypinpai');
			     }
				 else{
					 	$("#contentup .pinpai").eq(index).addClass('mypinpai');
				 }
					
			}
			else{
				if($("#contentup .pinpai").eq(0).hasClass('mypinpai')){
				    $("#contentup .pinpai").removeClass('mypinpai');
			     }
				 else{
					$("#contentup .pinpai").addClass('mypinpai');
				 }
				
			}
			    var istrue=false;
				var isfalse=false;
				var j=1;
				for(j=1;j<lengths;j++){
					if(!($("#contentup .pinpai").eq(j).hasClass('mypinpai'))){
						istrue=true;
					}
				
				}
				if(istrue==false&&j==lengths){
					$("#contentup .pinpai").eq(0).addClass('mypinpai');
					}
            
             if(index!=0){
             	if($("#contentup .pinpai").eq(index).hasClass('mypinpai')&&$("#contentup .pinpai").eq(0).hasClass('mypinpai')){
             		$("#contentup .pinpai").eq(0).addClass('mypinpai')
             	}else{		
             		$("#contentup .pinpai").eq(0).removeClass('mypinpai');
             	}
             }
        })

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

//店铺
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

 
 
 
 
 $("#managementdown div").bind("click",function(){
	let index = $(this).index();
            if(index!=0){
				if($("#managementdown .pinpai").eq(index).hasClass('mypinpai')){
				    $("#managementdown .pinpai").eq(index).removeClass('mypinpai');
			     }
				 else{
					 	$("#managementdown .pinpai").eq(index).addClass('mypinpai');
				 }
					
	 a		}
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
		$('html .cx_q').append('<div class="pinpai"><span>全选</span></div>')
	for (var i = 0; i < cx_a.length; i++) {
		$('html .cx_q').append('<div class="pinpai"><span>' + cx_a[i] + '</span></div>')
	}
    }
	function chaxun_two(){
		$('html .cx_w').append('<div class="pinpai"><span>全选</span></div>')
			for (var i = 0; i < cx_b.length; i++) {
				$('html .cx_w').append('<div class="pinpai"><span>' + cx_b[i] + '</span></div>')
		}
    }
	function chaxun_three(){
		$('html .cx_e').append('<div class="pinpai"><span>全选</span></div>')
	for (var i = 0; i < cx_c.length; i++) {
		$('html .cx_e').append('<div class="pinpai"><span>' + cx_c[i] + '</span></div>')
	}
    }