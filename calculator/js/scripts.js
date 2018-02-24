window.addEventListener('load', function(e) {

	let box = document.querySelector('.calc');
	let res = document.querySelector('.answer');
	let sum = document.querySelector('[name=sum]');
	let min = document.querySelector('[name=min]');
	let div = document.querySelector('[name=div]');
	let mult = document.querySelector('[name=mult]');
	let num1 = document.querySelector('[name=num1]');
	let num2 = document.querySelector('[name=num2]');
	box.addEventListener('mousedown', function(e) {
		drag(box, e);
	});
	function drag(elementToDrag, e){
		document.addEventListener('mousemove', boxMove);
		document.addEventListener('mouseup', function() {
			document.removeEventListener('mousemove', boxMove);
		});
		let deltaX = e.clientX - elementToDrag.offsetLeft;
		let deltaY = e.clientY - elementToDrag.offsetTop;

		function boxMove(e){
			elementToDrag.style.left = (e.clientX - deltaX) + 'px';
			elementToDrag.style.top = (e.clientY - deltaY) + 'px';
		}
	}

	sum.addEventListener('click', function(e) {
		res.innerHTML = parseInt(num1.value) + parseInt(num2.value);
		sum.disabled = true;
		console.log(res.innerHTML);
	});

	min.addEventListener('click', function(e) {
		res.innerHTML = parseInt(num1.value) - parseInt(num2.value);
		min.disabled = true;
		console.log(res.innerHTML);
	});

	div.addEventListener('click', function(e) {
		if(num2.value == '0' ){
			res.innerHTML = 'На 0 делить нельзя';
			div.disabled = true;
		}else{
			res.innerHTML = parseInt(num1.value) / parseInt(num2.value);
			div.disabled = true;
		}
		console.log(res.innerHTML);
	});

	mult.addEventListener('click', function(e) {
		res.innerHTML = parseInt(num1.value) * parseInt(num2.value);
		mult.disabled = true;
		console.log(res.innerHTML);
	});

	num1.addEventListener('input', btnEnabled);
	num2.addEventListener('input', btnEnabled);
	function btnEnabled(){
		if(this.value.search(/\D/) >= 0 ){
			res.innerHTML = 'Только число';
			sum.disabled = true;
			min.disabled = true;
			div.disabled = true;
			mult.disabled = true;
		}else{
			res.innerHTML = '';
			sum.disabled = false;
			min.disabled = false;
			div.disabled = false;
			mult.disabled = false;
		}
	}

});
