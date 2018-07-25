function guanbi(){
var url = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/crossOrgRank/query";
var Lwidth = document.getElementById("L-wid").getElementsByTagName("li")
var Rwidth = document.getElementById("R-wid").getElementsByTagName("li")
var sum = 0;
var arr = [];
var brr = [];
var crr = [];
var drr = [];
var err = [];
var frr = [];
var grr = [];
var hrr = [];
var jrr = [];
var par = {
		"areacode1":"",
		"local_send_flag":0,
		"org_brd_id":"B01",
		"org_level_id":"S",
		"userId":"1234536",
		"va_months":5,		
};

  $.ajax({
		type: 'POST',
		url: url,
		dataType: 'json',
		data: par,
		success:function(obj){
			console.log(obj)
			var list = obj.data.list;
			sum =  obj.data.summary;
			for (var i = 0; i < list.length; i++) {
				arr = arr.concat(list[i].cross_sal_amt)//金额
				brr = brr.concat(list[i].org_id)//店铺
				crr = crr.concat(list[i].cross_sal_amt_ratio)//占比
				drr = drr.concat(list[i].cross_sal_qty_ratio)//数量占比
				err = err.concat(list[i].cross_sal_qty)
				frr = frr.concat(list[i].org_id);//恢复初始
				grr = grr.concat(list[i].cross_sal_nos_ratio)//左边单数
				hrr = hrr.concat(list[i].org_id);//再次恢复
				jrr = jrr.concat(list[i].cross_sal_nos);//右边单数
			}
			 $("#pull-money").html(sum[0].sal_amt)
			 $('.pull-downAlert').on('click',function(){
				var picker = new mui.PopPicker();
						picker.setData([{
						index:1,
					    text: "零售金额",
					    jinqian:sum[0].sal_amt,						//零售金额选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_amt_ratio,		//零售金额的总占比
					    zongjinqian:sum[0].cross_sal_amt,			//零售总金额
					    ziti_l:"对店铺总零售占比",
					    ziti_r:"跨店零售金额",
					    jinelist:arr,
					    dianpu:brr,
					    Zzhanbi:crr
					}, {
						index:2,
					    text: "零售数量",
					    jinqian:sum[0].sal_qty,						//零售数量选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_qty_ratio,		//零售数量的总占比
					    zongjinqian:sum[0].cross_sal_qty,			//零售总数量
					    ziti_l:"对店铺总数量占比",
					    ziti_r:"跨店零售数量",
					}, {
						index:3,
					    text: "零售单数",
					    jinqian:sum[0].sal_nos,						 //零售单数选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_nos_ratio,		//零售单数的总占比
					    zongjinqian:sum[0].cross_sal_nos,			//零售总单数
					    ziti_l:"对店铺总单数占比",
					    ziti_r:"跨店零售单数",
					}])
					picker.pickers[0].setSelectedIndex(4, 2000);
					picker.show(function(SelectedItem) {
						$("#j").html(SelectedItem[0].ziti_r)
						$("#z").html(SelectedItem[0].ziti_l)
						  $("#jine").html(SelectedItem[0].zongjinqian)
						  $("#zhanbi").html(toPercent(SelectedItem[0].zongzhanbi/100))
					      $("#pull-money").html(SelectedItem[0].jinqian)
					      $("#Pull-text").html(SelectedItem[0].text)
					      if(SelectedItem[0].index==1){
					      		jinqian();
					      		firstList_zhanbi();
					      		firstList_jine()
					      		
					      }else if(SelectedItem[0].index==2){
					      	 $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     shuliang();
							firstList_shuliangzhanbi()
							firstList_shuliang()
					      }else{
					       	$(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     danshu();
						     firstList_danshuzhanbi()
						     firstList_danshu();
					      }
					      
					})
				})
			jinqian();
			firstList_zhanbi();
			firstList_jine()
		},
})
	

function jinqian(){
	var max;
    var maxmiddle;
    for(var i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            if(arr[i]<arr[j]){
　　　　　　　　　 max=arr[j];
                 arr[j]=arr[i];
                 arr[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+arr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = crr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = arr[i]/sum[0].cross_sal_amt;
			Rwidth[i].style.width=toPercent(je)
		 }
    	 $("#jine").html(sum[0].cross_sal_amt)
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_amt_ratio/100))
}
function zhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<crr.length; i++){
        for(var j=i; j<crr.length; j++){
            if(crr[i]<crr[j]){
　　　　　　　　　 max=crr[j];
                 crr[j]=crr[i];
                 crr[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=arr[j];
                 arr[j]=arr[i];
                 arr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+arr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
    }
    for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = crr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = arr[i]/sum[0].cross_sal_amt;
			Rwidth[i].style.width=toPercent(je)
		 }
}


function toPercent(point){
    var str=Number(point*100).toFixed(1);//换百分比
    str+="%";
    return str;
}

//1
	function firstList_zhanbi(){
			$("#zuobianzhanbi").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			zhanbi()
		})
	}
	function firstList_jine(){
		$("#youbianjine").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			jinqian()
		})
	}
	
	//2
	function firstList_shuliangzhanbi(){
			$("#zuobianzhanbi").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			shuliangzhanbi()
		})
	}
	function firstList_shuliang(){
		$("#youbianjine").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			shuliang()
		})
	}
	//3
	function firstList_danshuzhanbi(){
			$("#zuobianzhanbi").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			danshuzhanbi()
		})
	}
	function firstList_danshu(){
		$("#youbianjine").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			danshu()
		})
	}
//第二个数据页面
function shuliang(){
	var max;
    var maxmiddle;
    for(var i=0; i<err.length; i++){
        for(var j=i; j<err.length; j++){
            if(err[i]<err[j]){
　　　　　　　　　 max=err[j];
                 err[j]=err[i];
                 err[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=drr[j];
                 drr[j]=drr[i];
                 drr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+err[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = drr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = err[i]/sum[0].cross_sal_qty;
			Rwidth[i].style.width=toPercent(je)
		 }
    	$("#jine").html(sum[0].cross_sal_qty)
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_qty_ratio/100))

}

function shuliangzhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<drr.length; i++){
        for(var j=i; j<drr.length; j++){
            if(drr[i]<drr[j]){
　　　　　　　　　 max=drr[j];
                 drr[j]=drr[i];
                 drr[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=err[j];
                 err[j]=err[i];
                 err[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+err[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = drr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = err[i]/sum[0].cross_sal_qty;
			Rwidth[i].style.width=toPercent(je)
		 }

}

	//第三个数据页面
function danshu(){
	var max;
    var maxmiddle;
    for(var i=0; i<jrr.length; i++){
        for(var j=i; j<jrr.length; j++){
            if(jrr[i]<jrr[j]){
　　　　　　　　　 max=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=grr[j];
                 grr[j]=grr[i];
                 grr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+jrr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = grr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = jrr[i]/sum[0].cross_sal_nos;
			Rwidth[i].style.width=toPercent(je)
		 }
		$("#jine").html(sum[0].cross_sal_nos)
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_nos_ratio/100))
}
function danshuzhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<grr.length; i++){
        for(var j=i; j<grr.length; j++){
            if(grr[i]<grr[j]){
　　　　　　　　　 max=grr[j];
                 grr[j]=grr[i];
                 grr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+jrr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = grr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = jrr[i]/sum[0].cross_sal_nos;
			Rwidth[i].style.width=toPercent(je)
		 }

}
}
function kaiqi(){
var url = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/crossOrgRank/query";
var Lwidth = document.getElementById("L-wid").getElementsByTagName("li")
var Rwidth = document.getElementById("R-wid").getElementsByTagName("li")
var sum = 0;
var arr = [];
var brr = [];
var crr = [];
var drr = [];
var err = [];
var frr = [];
var grr = [];
var hrr = [];
var jrr = [];
var data = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":1,
		"areacode1":"",
		"org_level_id":"",
		"org_brd_id":""
	};
$.ajax({
		type: 'POST',
		url: url,
		dataType: 'json',
		data: data,
		success:function(obj){
			console.log(obj)
			var list = obj.data.list;
			sum =  obj.data.summary;
			for (var i = 0; i < list.length; i++) {
				arr = arr.concat(list[i].cross_sal_amt)//金额
				brr = brr.concat(list[i].org_id)//店铺
				crr = crr.concat(list[i].cross_sal_amt_ratio)//占比
				drr = drr.concat(list[i].cross_sal_qty_ratio)//数量占比
				err = err.concat(list[i].cross_sal_qty)
				frr = frr.concat(list[i].org_id);//恢复初始
				grr = grr.concat(list[i].cross_sal_nos_ratio)//左边单数
				hrr = hrr.concat(list[i].org_id);//再次恢复
				jrr = jrr.concat(list[i].cross_sal_nos);//右边单数
			}
			 $("#pull-money").html(sum[0].sal_amt)
			 $('.pull-downAlert').on('click',function(){
				var picker = new mui.PopPicker();
						picker.setData([{
						index:1,
					    text: "零售金额",
					    jinqian:sum[0].sal_amt,						//零售金额选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_amt_ratio,		//零售金额的总占比
					    zongjinqian:sum[0].cross_sal_amt,			//零售总金额
					    ziti_l:"对店铺总零售占比",
					    ziti_r:"跨店零售金额",
					    jinelist:arr,
					    dianpu:brr,
					    Zzhanbi:crr
					}, {
						index:2,
					    text: "零售数量",
					    jinqian:sum[0].sal_qty,						//零售数量选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_qty_ratio,		//零售数量的总占比
					    zongjinqian:sum[0].cross_sal_qty,			//零售总数量
					    ziti_l:"对店铺总数量占比",
					    ziti_r:"跨店零售数量",
					}, {
						index:3,
					    text: "零售单数",
					    jinqian:sum[0].sal_nos,						 //零售单数选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_nos_ratio,		//零售单数的总占比
					    zongjinqian:sum[0].cross_sal_nos,			//零售总单数
					    ziti_l:"对店铺总单数占比",
					    ziti_r:"跨店零售单数",
					}])
					picker.pickers[0].setSelectedIndex(4, 2000);
					picker.show(function(SelectedItem) {
						$("#j").html(SelectedItem[0].ziti_r)
						$("#z").html(SelectedItem[0].ziti_l)
						  $("#jine").html(SelectedItem[0].zongjinqian)
						  $("#zhanbi").html(toPercent(SelectedItem[0].zongzhanbi/100))
					      $("#pull-money").html(SelectedItem[0].jinqian)
					      $("#Pull-text").html(SelectedItem[0].text)
					      if(SelectedItem[0].index==1){
					      		jinqian();
					      		firstList_zhanbi();
					      		firstList_jine()
					      		
					      }else if(SelectedItem[0].index==2){
					      	 $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     shuliang();
							firstList_shuliangzhanbi()
							firstList_shuliang()
					      }else{
					       	$(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     danshu();
						     firstList_danshuzhanbi()
						     firstList_danshu();
					      }
					      
					})
				})
			jinqian();
			firstList_zhanbi();
			firstList_jine()
		},
})

function jinqian(){
	var max;
    var maxmiddle;
    for(var i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            if(arr[i]<arr[j]){
　　　　　　　　　 max=arr[j];
                 arr[j]=arr[i];
                 arr[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+arr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = crr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = arr[i]/sum[0].cross_sal_amt;
			Rwidth[i].style.width=toPercent(je)
		 }
    	 $("#jine").html(sum[0].cross_sal_amt)
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_amt_ratio/100))
}
function zhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<crr.length; i++){
        for(var j=i; j<crr.length; j++){
            if(crr[i]<crr[j]){
　　　　　　　　　 max=crr[j];
                 crr[j]=crr[i];
                 crr[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=arr[j];
                 arr[j]=arr[i];
                 arr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+arr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
    }
    for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = crr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = arr[i]/sum[0].cross_sal_amt;
			Rwidth[i].style.width=toPercent(je)
		 }
}


function toPercent(point){
    var str=Number(point*100).toFixed(1);//换百分比
    str+="%";
    return str;
}

//1
	function firstList_zhanbi(){
			$("#zuobianzhanbi").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			zhanbi()
		})
	}
	function firstList_jine(){
		$("#youbianjine").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			jinqian()
		})
	}
	
	//2
	function firstList_shuliangzhanbi(){
			$("#zuobianzhanbi").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			shuliangzhanbi()
		})
	}
	function firstList_shuliang(){
		$("#youbianjine").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			shuliang()
		})
	}
	//3
	function firstList_danshuzhanbi(){
			$("#zuobianzhanbi").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			danshuzhanbi()
		})
	}
	function firstList_danshu(){
		$("#youbianjine").on('click',function(){
		    $(".data_list_r ul").children().remove()
		    $(".data_list_m ul").children().remove()
		    $(".data_list_l ul").children().remove()
			danshu()
		})
	}
//第二个数据页面
function shuliang(){
	var max;
    var maxmiddle;
    for(var i=0; i<err.length; i++){
        for(var j=i; j<err.length; j++){
            if(err[i]<err[j]){
　　　　　　　　　 max=err[j];
                 err[j]=err[i];
                 err[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=drr[j];
                 drr[j]=drr[i];
                 drr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+err[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = drr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = err[i]/sum[0].cross_sal_qty;
			Rwidth[i].style.width=toPercent(je)
		 }
    	$("#jine").html(sum[0].cross_sal_qty)
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_qty_ratio/100))

}

function shuliangzhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<drr.length; i++){
        for(var j=i; j<drr.length; j++){
            if(drr[i]<drr[j]){
　　　　　　　　　 max=drr[j];
                 drr[j]=drr[i];
                 drr[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=err[j];
                 err[j]=err[i];
                 err[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+err[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = drr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = err[i]/sum[0].cross_sal_qty;
			Rwidth[i].style.width=toPercent(je)
		 }

}

	//第三个数据页面
function danshu(){
	var max;
    var maxmiddle;
    for(var i=0; i<jrr.length; i++){
        for(var j=i; j<jrr.length; j++){
            if(jrr[i]<jrr[j]){
　　　　　　　　　 max=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=grr[j];
                 grr[j]=grr[i];
                 grr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+jrr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = grr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = jrr[i]/sum[0].cross_sal_nos;
			Rwidth[i].style.width=toPercent(je)
		 }
		$("#jine").html(sum[0].cross_sal_nos)
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_nos_ratio/100))
}
function danshuzhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<grr.length; i++){
        for(var j=i; j<grr.length; j++){
            if(grr[i]<grr[j]){
　　　　　　　　　 max=grr[j];
                 grr[j]=grr[i];
                 grr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+jrr[i]+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
        	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var zb = grr[i]/100;
			      	Lwidth[i].style.width=toPercent(zb)
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		je = jrr[i]/sum[0].cross_sal_nos;
			Rwidth[i].style.width=toPercent(je)
		 }

}
}
	$('#SS').on('click',function(){
		 if($('.switch-anim').prop('checked')){
				guanbi()
      		}else{
				
				$("#L-wid").html("")
				$("#M-wid").html("")
				$("#R-wid").html("")
				kaiqi()
      	  	}
	})
		guanbi()