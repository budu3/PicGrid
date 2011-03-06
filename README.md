PicGrid

A jQuery plugin that creates a grid/tile of images
=====================================================


Example
=======

    var images =  [{'src':'200.jpg', 'width':'200px', 'height':'200px', 'label': 'kitten 1'},
               {'src':'201.jpg', 'width':'200px', 'height':'200px', 'label': 'kitten 2'},
               {'src':'202.jpg', 'width':'200px', 'height':'200px', 'label': 'kitten 3'},
               {'src':'203.jpg', 'width':'200px', 'height':'200px', 'label': 'kitten 4'}
               ];

    var settings = {
		'cols' : 2,
  		'rows' : 2,
   		'images': images,
  		'width': 0,
   		'height': 0
    };

    $(document).ready(function(){
		$("#main").picGrid(settings);
    }