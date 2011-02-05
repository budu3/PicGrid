(function( $ ){

			$.fn.picGrid = function( options ) {

				var images = 	[{'src':'barack.jpg', 'width':'194px', 'heigth':'259px'},
    						 	 {'src':'barack.jpg', 'width':'194px', 'heigth':'259px'},
    						 	 {'src':'barack.jpg', 'width':'194px', 'heigth':'259px'},
    						 	 {'src':'barack.jpg', 'width':'194px', 'heigth':'259px'}
    							];

				var settings = {
      					'cols' 	: '',
      					'rows'	: '',
      					'images': '',
      					'labels': []
    				};

    			var tag = "";
				return this.each(function() {
					
					if ( options ) { 
        				$.extend( settings, options );
      		}
      				
      				var k = 0;
      				for (i=0; i<settings['rows']; i++){
      					for (j=0; j<settings['cols']; j++){
      						tag+="<span id='picGridImg_"+ k +"'><img src='"+ settings['images'][k].src +"' width='"+ settings['images'][k].width +"' heigth='"+ settings['images'][k].heigth +"'></span>";
      						k++;
      					}
                tag+="<br/>";
                for (n=0; n<settings['cols']; n++){
                  tag+="<span id='picGridLabel' style='display:inline-block; width:"+settings['images'][n].width +"'>"+ settings['labels'][n] +"</span>";
                }
      					tag+="<br/>";
      				}
					$(this).append(tag);			
				});
			};
		})( jQuery );
