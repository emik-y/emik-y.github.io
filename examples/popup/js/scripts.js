class Popup
{
	constructor(e){
		this.popup = $(e.popup);
		this.overlay = $(e.overlay);
		this.showPopup = $(e.showPopup);
		this.buttons = $(e.buttons);
		this.blur = $(e.blur) || false;
		this.text = e.inner;
		let th = this;
		console.log(this.buttons);
		// console.log(e.inner);
		this.showPopup.on('click', function(e){
			e.preventDefault();
			th.open(th.text);
		});
		this.overlay.on('click', function(e){
			th.close(th.text);
		});
		this.buttons.on('click', function(e){
			th.close(th.text);
		});
	}
	open(text){
		this.popup.addClass('active').html(text);
		this.overlay.addClass('active');
		this.buttons.addClass('active');
		// дз - по клику на оверлей(создать метод close, которое будет закрывать по клику на оверлей; remove class 'active') чтобы закрывалось. добавить крестик чтобы закрывалось
	}
	close(text){
		this.popup.removeClass('active').html(text);
		this.overlay.removeClass('active');
		this.buttons.removeClass('active');
	}
}