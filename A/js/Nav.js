var Nd = document.getElementsByClassName('nav-d');
		var MdId = document.getElementsByClassName('mendianId');
		for (var i = 0; i < Nd.length; i++) {
			Nd[i].index = i;
			Nd[i].onclick = function(){ 
					  $(this).addClass('active');
					 
					  $(this).siblings('li').removeClass('active');
					  if($(this).index()==0){
					  		alert("昨日暂无数据")
					  }else if($(this).index()==1){
					  		alert("上周暂无数据")
					  }else if($(this).index()==2){
					  		alert("本周暂无数据")
					  }else if($(this).index()==3){
					  		alert("上月暂无数据")
					  }else if($(this).index()==4){
//					  		alert("本月暂无数据")
								$("#L-wid").children().remove()
								$("#M-wid").children().remove()
								$("#R-wid").children().remove()
								gg(par)
					  }else{
					  		alert("暂无数据")
					  }
			}
		}
	
		
