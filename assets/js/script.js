$('form').on('submit', function (event) {
	event.preventDefault();
})

$('form button').on('click', function () {
	$(this).removeClass('not-selected');
	$(this).addClass('selected');

	$(this).parent().siblings().find('button').removeClass('selected');
	$(this).parent().siblings().find('button').addClass('not-selected');
})
