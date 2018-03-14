window.addEventListener('load', function(e) {
	let timer = new TimerWords('.t1', 0);
});

class Timer
{
	constructor(el,time){
		this.el = document.querySelector(el);
		this.time = (time > 0) ? time : 0;
		this.interval;
		this.render();
		this.run();
	}
	tick(){
		this.time++;
		this.render();
	}
	run(){
		this.interval = setInterval( () =>{
			this.tick();
		}, 1000);
	}
}

class TimerFormatted extends Timer
{
	splitTime(){
		let h = parseInt(this.time / 3600);
		let h_s = parseInt(this.time % 3600);
		let m = parseInt(h_s / 60);
		let s = parseInt(h_s % 60);
		let h_zero  = (h < 10) ? 0 : '';
		let m_zero  = (m < 10) ? 0 : '';
		let s_zero  = (s < 10) ? 0 : '';
		return {h, m, s, s_zero};
	}
	render(){
		let data = this.splitTime();
		// this.el.innerHTML = `${h_zero}${h} : ${m_zero}${m} : ${s_zero}${s}`;
		this.el.innerHTML = `${data.h} : ${data.m} : ${data.s_zero}${data.s}`;
	}
}

class TimerWords extends TimerFormatted
{
	getEnding(num, var1, var2){
		let i = num;
		if (i == 1){
			return var1;
		}else{
			return var2;
		}
	}
	render(){
		let data = this.splitTime();
		let string;
		string = data.h + ' ' + this.getEnding(data.h, 'hour', 'hours');
		string += ', ' + data.m + ' ' + this.getEnding(data.m, 'minute', 'minutes');
		string += ', ' + data.s + ' ' + this.getEnding(data.s, 'second', 'seconds') + '.';
		this.el.innerHTML = string;
	}
}