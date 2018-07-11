var x=0, y=0, op = "";

function reset() {
	document.getElementsByName("screen")[0].value = "";
}

function isOperator(c) {
	c = c.trim();
	return (c == "+" || c == "-" || c == "X" || c == ":");
}

function calculate() {
	if (op == "+") return x + y;
	else if (op == "-") return x - y;
	else if (op == "X") return x * y;
	else if (op == ":") return x / y;
}

function loadEvent() {
	var b = document.getElementsByName("op");
	var text = document.getElementsByName("screen")[0];
	var i=0;
	for (; i<b.length; i++) {
		b[i].addEventListener("click", function (event) {
			var c = event.currentTarget.value;
			if (isNaN(c) == false) {
				if (text.value.trim() == "") {
					text.value = c;
				}
				else
					text.value += c;
			}
			if (c == "AC") reset();
			if (isOperator(c)) {
				op = c;
				x = parseFloat(text.value);
				reset();
			}
			if (c == "=") {
				y = parseFloat(text.value);
				text.value = "" + calculate();
			}
			if (c == "+/-") {
				x = -parseFloat(text.value);
				text.value = x;
			}
			if (c == "%") {
				x = parseFloat(text.value) / 100;
				text.value = x;
			}
			if (c == ".") {
				if (text.value.indexOf(".") == -1)
					text.value += ".";
			}
		});
	}
}


