uu.plug = {};
uu.plug.slideshow = function( selector, option ){
	
	uu.ready(function(){

		var images = uu.query(selector+' img'), 
			pos = 0, 
			delay =  (option && option.delay) ?  option.delay  : 2500,
			duration = (option && option.duration) ? option.duration: 1500;
	
		if( !images ){ 
			return;
	   	}
		
		loop();
		setInterval(loop, delay );
		
		function loop(){
			
			uu.each(images, function(img, index){
				if( index != pos ){
					uu.css( img ,{ o: 0 } );
					uu.css( img, {display: 'none' });
				}else{
					uu.fx.fadeIn(img, duration );
					uu.css( img, {display: 'inline' });
				}
				
			});
			
			pos++;
			if( pos >=  images.length ){
			   	pos = 0 
			};
		}
		
	});	
	
}
