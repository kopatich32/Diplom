<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<input type="text">
<script>
	let input = document.querySelector('input');
	input.addEventListener('input', function (e) {
		if (e.inputType === 'deleteContentForward' || e.inputType === 'deleteContentBackward') return false
		this.value = this.value.replace(/\D/g, '')
		if (/^[0-9]/.test(this.value)) {
			this.value = this.value.replace(/^[0-9]/, '+7')
		} else {
			this.value = '+' + this.value
		}
		//+7(939)878-60-29
		let start = 2;
		let max = 14
		let obj = {
			0: '(',
			4: ')',
			8: '-',
			11: '-',
		}
		for (let char in obj) {
			if (this.value[start + (+char)] && this.value[start + (+char)] !== obj[char]) {
				this.value = this.value.substring(0, start + (+char)) + obj[char] + this.value.substring(start + (+char))
			}
		}
		if (this.value[max + start]) {
			this.value = this.value.substring(0, start + max)
		}
	})
</script>
</body>
</html>
