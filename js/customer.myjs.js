$(function(){
	
	//左侧导航条
	$('.zt, .jyq, .mypage, .mobile, .collection, .imgproduct').hover(function(){
		var t_class = $(this).attr('class');
		if(t_class.indexOf('mobile') != -1){
			$(this).parent().find('div.'+t_class).show();
			//$(this).parent().find('.mobile').show();
			//if($(this).attr('class').indexOf('mobile') != -1){
			//$(this).parent().find('div.'+$(this).attr('class')).show();
		}
		else{
			$(this).find('.drop_layer').show();//.show()其实相当于disbplay:block;
		}
		
	},function(){
		var t_class = $(this).attr('class');
		if(t_class.indexOf('mobile') != -1 ){
			//$('div.mobile').hide();
			$(this).parent().find('div.'+t_class).hide();
			//$(this).parent().find('.app').hide();
		}
		else{
			$(this).find('.drop_layer').hide();
		}
	});


	$('#fontclick').bind('click',function(e){
		$('#fontall').toggle();
	});
	
	$('#useclick').bind('click',function(e){
		$('#hidelist').toggle();
	});

	$('#hidelist li').hover(function() {
		$(this).children('ul').show();  
	}, function() {
		$(this).children('ul').hide();   
	});
	
	/*点击除了特定div的页面其它地方，隐藏该div功能。*/
	$(document).bind('click', function(e) {
		var e = e || window.event; //浏览器兼容性 
		var elem = e.target || e.srcElement;
		var elemid=elem.id && elem.id;
		switch(elemid){
			case('fontclick'):
				return;
				break;
			case('useclick'):
				return;
				break;
			case('moreshare'):
				return;
				break;
			default:
				elem = elem.parentNode;
				break;
		}
		/*while (elem) { //循环判断至跟节点，防止点击的是div子元素 
			if (elem.id && elem.id == 'fontclick') {
				return;
			}else if(elem.id && elem.id=='useclick'){
				return;
			}else if(elem.id && elem.id=='moreshare'){
				return;
			}
			elem = elem.parentNode;
		}*/
		$('#fontall').css('display', 'none'); //点击的不是div或其子元素
		$('#hidelist').css('display', 'none'); 
		$('#sharelist').css('display', 'none'); 
	});

	
	$('#moreshare').click(function(){
		$('#sharelist').toggle();
		//$(this).css('opacity','0');
		//$(this).attr('src','http://www.thinkcmf.com/font/icons/sort-asc');
	}/*,function(){
		$(this).css('opacity','1');
	}*/);
	
	
			
});	