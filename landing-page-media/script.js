$(document).ready(function() {
	/*
	* Plugin intialization
	*/
	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
    scrollingSpeed: 500,
		navigation: {
			'position': 'right',
			'tooltips': ['Grundsätze der Pfadfinder', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6', 'Page 7', 'Page 8']
		},
		afterRender: function(){
			$('#pp-nav').addClass('custom');
		},
		afterLoad: function(anchorLink, index){
			if(index>1){
				$('#pp-nav').removeClass('custom');
			}else{
				$('#pp-nav').addClass('custom');
			}
		}
	});


	/*
	* Internal use of the demo website
	*/
	$('#showExamples').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#examplesList').toggle();
	});

	$('html').click(function(){
		$('#examplesList').hide();
	});
});
