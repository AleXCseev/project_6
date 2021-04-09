$(function () {
	AOS.init();

	$('[data-fancybox]').fancybox({
		loop: true,
	});

	if (!String.prototype.padStart) {
		String.prototype.padStart = function padStart(targetLength, padString) {
			targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
			padString = String((typeof padString !== 'undefined' ? padString : ' '));
			if (this.length > targetLength) {
				return String(this);
			}
			else {
				targetLength = targetLength - this.length;
				if (targetLength > padString.length) {
					padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
				}
				return padString.slice(0, targetLength) + String(this);
			}
		};
	}

	function timer () {
		function runMultiple(hoursSelector, minutesSelector, secondsSelector) {
			var d = new Date();
			var h = String(23 - d.getHours()).padStart(2, "0");
			var m = String(59 - d.getMinutes()).padStart(2, "0");
			var s = String(60 - d.getSeconds()).padStart(2, "0");
			$(hoursSelector).text(h)
			$(minutesSelector).text(m)
			$(secondsSelector).text(s)
		}
		setInterval(function () {
			runMultiple(".hours", ".minutes", ".seconds")
		}, 1000);
	}

	timer()

	$(".reviews").slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1
	});
})
