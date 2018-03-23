class Popup
{
	constructor(e){
		this.popup = $(e.popup);
		this.popup_parent = $(e.popup).parent();
		this.button = $(e.popup).parent().find('.button');
		this.overlay = $(e.overlay);
		this.showPopup = $(e.showPopup);
		this.blur = $(e.blur) || false;
		this.text = e.inner;
		let th = this;
		this.showPopup.on('click', function(e){
			e.preventDefault();
			th.open(th.text);
		});
		this.overlay.on('click', x);
		this.button.on('click', x);
		function x(){
			th.close();
		}
	}
	open(text){
		if (this.blur) {
			this.blur.addClass('popupBlur');
		}
		this.popup.addClass('active').html(text);
		this.overlay.addClass('active');
		this.popup_parent.addClass('active');
	}
	close(text){
		this.overlay.removeClass('active');
		this.popup_parent.removeClass('active');
		if (this.blur) {
			this.blur.removeClass('popupBlur');
		}
	}
}