$(function() {

	var	$element = $('.v-center-me'),
		elementHeight = $element.height(),
		parentHeight = $element.parent().height(),
		centeringOffset;

	function centerElement($el) {
		centeringOffset = Math.round(parentHeight - elementHeight) / 2;

		$el.css('padding-top', centeringOffset);
	}


	function checkElementHeight($el) {
		// see if the element's height has changed since it was last set
		if (elementHeight != $($el).height()) {
			// if it was, update the elementHeight variable to match the new height
			elementHeight = $el.height();

			console.log('height changed to!' + elementHeight);
			
			// re-center the elementoff of the new height
			centerElement($el);
		}
	}

	centerElement($element);

	setInterval(function() {
		checkElementHeight($element)
	}, 500);
});
