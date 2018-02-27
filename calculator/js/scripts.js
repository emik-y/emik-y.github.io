window.addEventListener('load', function(e) {

	let box = document.querySelector('.calc');
	let res = document.querySelector('.answer');
	let inputs = document.querySelectorAll('.buttons input');
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

	for(input of inputs) {

		input.addEventListener('click', function(e) {
			switch(this.value){
				case '+':
				res.innerHTML = parseInt(num1.value) + parseInt(num2.value); break;
				case '-':
				res.innerHTML = parseInt(num1.value) - parseInt(num2.value); break;
				case '*':
				res.innerHTML = parseInt(num1.value) * parseInt(num2.value); break;
				case '/':
				if(num2.value == '0' ){
					res.innerHTML = "Can't divide by 0";
				}else{
					res.innerHTML = parseInt(num1.value) / parseInt(num2.value);
				}
			}
			for (input of inputs) {
				input.disabled = false;
			}
			this.disabled = true;
		});
	}

	num1.addEventListener('input', btnEnabled);
	num2.addEventListener('input', btnEnabled);
	function btnEnabled(){

		if(this.value.search(/[0-9-]/) >= 0 ){
			for (input of inputs){
				input.disabled = false;
				res.innerHTML = '';
			}
		}else{
			res.innerHTML = 'Only number';
			for (input of inputs){
				input.disabled = true;
			}
		}
	}
});
