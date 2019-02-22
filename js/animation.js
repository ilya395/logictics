window.addEventListener( 'load', function () {
	const headerTopString = document.querySelector( '#top-string' );

	TweenMax.fromTo( headerTopString, 30, {
		x: 1200
	}, {
		ease: Power0.easeNone,
		x: -900,
		repeat: -1
	});	
}, false );