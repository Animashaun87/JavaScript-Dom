const inputs = document.querySelectorAll('input');
console.log(inputs);
//append elements to DOM
const page = document.getElementById('page');
let parent;


const create_element = () =>
{
	let element = document.createElement(inputs[0].value);
	for (let i = 1; i < inputs.length; i++) {
	let attribute = inputs[i].getAttribute('placeholder');
	let value = inputs[i].value;
	if (value) {
	element[attribute] = value;	
	}
	if (attribute === 'parent id' && value) {
		let div = document.getElementById(value);
		div.appendChild(element)
	} else {
	    page.appendChild(element);
	}
	}
	parent = element.parentNode;
	console.log(element);
}

const remove_element = () => {
    let last_child = parent.lastChild;
    last_child.remove();
}

const reset = () => {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}
}

const hide_element = () => {
   let wrap = document.getElementById('wrap');
   // wrap.className = 'd-none';
   wrap.style.display = 'none';
   let show_btn = document.createElement('span');
   show_btn.innerHTML = "Show Panel";
   show_btn.id = "showBtn";
   show_btn.className = "btn btn-primary float-right m-4";
   show_btn.setAttribute('onclick', 'show_element()');
   page.appendChild(show_btn);
}

const show_element = () => {
	let wrap = document.getElementById('wrap');
	wrap.style.display = "block";
	let btn = document.getElementById('showBtn');
	let p_btn = btn.parentNode;
	p_btn.removeChild(btn); 
}