PicGrid
============
A jQuery plugin that creates a grid/tile of images
=====================================================


Example
---------

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

Documentation
---------------

.picGrid(__settings__)

__settings__ An objcet containing the various variables needed to create your grid

**.cols** the number of columns in your grid

**.rows** the number of rows in your grid

**.width** the width of all the images in your column. If this is set to 0 then you have to set the width attribute in the images array

**.height** the width of all the images in your column. If this is set to 0 then you have to set the width attribute in the image array

 **.images** an array containing the attributes of all the images in your grid

  **src** the url of the image

  **width** the width of the image

  **height** the height of the image

  **label** the label of the image

Links
------
Example and Project Homepage: <http://budu3.github.com/PicGrid/>

Author
-------
AL SAM
