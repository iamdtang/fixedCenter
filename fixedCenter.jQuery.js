/**
 * @title: Fixed Center
 * @author: David Tang
 * @copyright: 2012 David Tang
 * @requires: jQuery
 * @does: This plugin centers an element on the page using fixed positioning and keeps the element centered 
 * if you scroll horizontally or vertically.
 * @howto: $('#my-element').fixedCenter(); would center the element with ID 'my-element' 
 */

(function($) {
	jQuery.fn.fixedCenter = function(){
		return this.each(function(){
			var $element = $(this), 
				$win = $(window);
			
			function centerElement(){
				var elementWidth, elementHeight, windowWidth, windowHeight, X2, Y2;
				elementWidth = $element.outerWidth(true);
				elementHeight = $element.outerHeight(true);
				windowWidth = $win.width();
				windowHeight = $win.height();	
				X2 = (windowWidth/2 - elementWidth/2);
				Y2 = (windowHeight/2 - elementHeight/2);

				if(Y2 < 0) { //reset Y2 value for when the screen resolution changes
					Y2 = 0;
				}

				$element.css({
					'left':X2+'px',
					'top':Y2+'px',
					'position':'fixed'
				});
				//console.log('top', Y2);
				//console.log('windowHeight', windowHeight);
				//console.log('elementHeight', elementHeight);						
			}
			
			$win.bind('resize',function(){
				centerElement();
			});

			$(document).ready(function(){
				centerElement();
			});
		});
	};
})(jQuery);
