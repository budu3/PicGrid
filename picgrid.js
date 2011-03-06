/*
The MIT License

Copyright (c) 2011 AL SAM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function( $ ){

      $.fn.picGrid = function( options ) {

        var images =  [];

        var settings = {
          'cols' : '1',
          'rows' : '1',
          'images': images,
          'width': 0,
          'height': 0
        };

        var tag = "";

        return this.each(function() {
          
          if ( options ) { 
                $.extend( settings, options );
          }
              
              var k = m = 0;
              for (var i=0; i<settings['rows']; i++){
                for (var j=0; j<settings['cols']; j++){
                  var w;
                  var h;
                  (settings['width'] >= 0) ? w = settings['images'][k].width  : w = settings['width'];
                  (settings['height'] >= 0) ? h = settings['images'][k].height : h = settings['height'];

                  tag+="<span id='picGridImg_"+ k +" class='picGridBorder'><img src='"+ settings['images'][k].src +"' width='"+ w +"' height='"+ h +"'></span>";
                  k++;
                }
                tag+="<br/>";
                for (n=0; n<settings['cols']; n++){

                  (settings['width'] >= 0) ? w = settings['images'][i].width  : w = settings['width'];
                  tag+="<span id='picGridLabel' style='display:inline-block; width:"+ w +"'>"+ settings['images'][m].label +"</span>";
                  m++;
                }
                tag+="<br/>";
              }
          $(this).append(tag);      
        });
      };
    })( jQuery );