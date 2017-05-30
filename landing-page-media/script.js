$(document).ready(function() {
	/*
	* Plugin intialization
	*/
	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4'],
		sectionsColor: ['#f0f4f6', '#ffffff', '#f0f4f6', '#ffffff'],
    scrollingSpeed: 500,
		navigation: {
			'position': 'right',
			'tooltips': ['Grundsätze der Pfadfinder', 'Page 2', 'Page 3', 'Page 4']
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
