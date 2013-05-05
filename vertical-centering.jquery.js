function centerElement($element) {
	elementHeight = $element.height();
	parentHeight = $element.parent().height();
	centeringOffset = (parentHeight - elementHeight) / 2;

	$element.css('padding-top', centeringOffset);
}