window.addEventListener('load', function(e) {

	let new_data = new Date(2019, 0 , 1, 0, 00).getTime();
	let current_data = new Date().getTime();
	let sale = (new_data - current_data) / 1000;
	let timer = new TimerWords('.t1', sale);

});

class Timer
{
	constructor(el, time){
		this.el = document.querySelector(el);
		this.time = (time > 0) ? time :  0;
		this.interval;
		this.render();
		this.run();
	}
	tick(){
		this.time--;
		if (this.time <= 0) {
			this.stop();
		}
		this.render();
	}
	run(){
		this.interval = setInterval( () =>{
			if (this.time > 0) {
				this.tick();
			}
		}, 1000);
	}
	stop(){
		clearInterval(this.interval);
	}
}

class TimerFormatted extends Timer
{
	splitTime(){
		let d = parseInt(this.time / 86400);
		let d_s = parseInt(this.time % 86400);
		let h = parseInt(d_s / 3600);
		let h_s = parseInt(d_s % 3600);
		let m = parseInt(h_s / 60);
		let s = parseInt(h_s % 60);
		let s_zero = (s < 10) ? 0 : '';
		return {d, h, m, s, s_zero};
	}
	render(){
		let data = this.splitTime();
		this.el.innerHTML = `${data.d} : ${data.h} : ${data.m} : ${data.s_zero}${data.s}`;
	}
}

class TimerWords extends TimerFormatted
{
	getEnding(num, var1, var2){
		let i = num;
		if (i == 1) {
			return var1;
		}else{
			return var2;
		}
	}
	render(){
		let data = this.splitTime();
		let string;
		string = data.d + ' ' + this.getEnding(data.d, 'day', 'days');
		string += ', ' + data.h + ' ' + this.getEnding(data.h, 'hour', 'hours');
		string += ', ' + data.m + ' ' + this.getEnding(data.m, 'minute', 'minutes');
		string += ', ' + data.s + ' ' + this.getEnding(data.s, 'second', 'seconds') + '.';
		this.el.innerHTML = string;
	}
}