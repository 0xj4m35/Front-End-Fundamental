function loadEvent() {
	var b = document.getElementsByName("op");
	var i=0, num=0, ope1=0, ope2=0, equal = 0 ;
	var operator ="";
	for (; i<b.length; i++) {
		b[i].addEventListener("click", function (event) {
			var c = event.currentTarget.value;
			if (isNaN(c) == false) {
				if (num == 0) {
					num = c;
				}
				else{
					num = num+c;
				}
				ope1 = parseInt(num);
				document.getElementsByName("screen")[0].value = num;
			}

			else {
				switch (c) {
					case "AC":
						document.getElementsByName("screen")[0].value = "";
						num = 0;
						ope1 = 0;
						ope2 = 0;
						operator="";
						break;
					case "+/-":
						ope1 = -ope1;
						num = ope1.toString();
						document.getElementsByName("screen")[0].value = num;
						break;
					case "%":
						ope1 = ope1 / 100;
						num = ope1.toString();
						document.getElementsByName("screen")[0].value = num;
						break;
					case "+":
						operator = "+";
						ope2 = ope1;
						ope1 = 0;
						num = 0;
						break;
					case "-":
						operator = "-";
						ope2 = ope1;
						ope1 = 0;
						num = 0;
						break;
					case "X":
						operator = "X";
						ope2 = ope1;
						ope1 = 0;
						num = 0;
						break;
					case ":":
						operator = ":";
						ope2 = ope1;
						ope1 = 0;
						num = 0;
						break;
					case ".":
						document.getElementsByName("screen")[0].value = num + ".";
						break;
					case "=":
						switch (operator) {
							case "+" :
								equal = ope1 + ope2;
								break;
							case "-" :
								equal = ope2 - ope1;
								break;
							case "X" :
								equal = ope1*ope2;
								break;
							case ":" :
								equal = ope2 / ope1;
								break;
							case "" :
								equal = ope1;
								break;
						}
						num = equal.toString();
						ope1 = 0;
						ope2 = 0;
						operator = "";
						document.getElementsByName("screen")[0].value = num;
						num = 0;
						break;
				}
			}
		});
	}

	
}

