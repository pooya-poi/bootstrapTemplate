//+++++++++++++++++++++++ Start:side nav +++++++++++++++++++++++
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
//-------------------- End:side nav --------------------



//+++++++++++++++++++++++ Start:Swiper +++++++++++++++++++++++
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});

// *********************************** carlike this suggestion slider	***********************************
var swiper = new Swiper('.second-swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 1000
	},
	fadeEffect: {
		crossFade: true
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 1024px
		1024: {
			slidesPerView: 3,
			spaceBetween: 40
		}
	},

});

swiper.on('slideChange', function () {
	console.log('slide changed');
});
//-------------------- End:Swiper --------------------




//++++++++++++++++++++++ Start:Chartjs ++++++++++++++++++++++
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'BMW M3 RED',
			backgroundColor: 'transparent',
			borderColor: '#E5383B',
			data: [10, 10, 5, 2, 20, 30, 10],
			fill: true,
			pointBorderWidth: 5
		},
		{
			label: 'BMW M3 black',
			backgroundColor: 'transparent',
			borderColor: '#000',
			data: [5, 7, 8, 8, 15, 30, 10],
			pointBorderWidth: 5
		},
		{
			label: 'BMW M3 Blue',
			backgroundColor: 'transparent',
			borderColor: '#1994CF',
			data: [15, 17, 18, 10, 15, 24, 20, 30],
			pointBorderWidth: 5
		}
		],

	},

	// Configuration options go here
	options: {
		animation: {
			duration: 1000,
			easing: 'easeOutQuart',
		}
	}
});

//-------------------- End:Chartjs --------------------
