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

<div>
	<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="bloko-icon">
		<path d="M9.18434 2.06815L9.35689 1.4242V1.4242L9.18434 2.06815ZM10 4.66667C10 5.03486 10.2985 5.33333 10.6667 5.33333C11.0349
		5.33333 11.3334 5.03486 11.3334 4.66667H10ZM10.5986 3.48236L11.2425 3.30982L10.5986 3.48236ZM6.81574 2.06815L6.98828 2.7121L6.81574
		2.06815ZM4.66671 4.66667C4.66671 5.03486 4.96518 5.33333 5.33337 5.33333C5.70156 5.33333
		6.00004 5.03486 6.00004 4.66667H4.66671ZM5.40152 3.48236L6.04547 3.65491L5.40152 3.48236ZM2.06139 13.8547L2.36405 13.2607L2.06139
		13.8547ZM1.4787 13.272L2.0727 12.9693L1.4787 13.272ZM14.5214 13.272L13.9274 12.9693L14.5214 13.272ZM13.9387 13.8547L13.636 13.2607L13.9387
		13.8547ZM13.9387 4.81199L13.636 5.406L13.9387 4.81199ZM14.5214 5.39468L13.9274 5.69734L14.5214 5.39468ZM2.06139 4.81199L2.36405 5.406L2.06139
		4.81199ZM1.4787 5.39468L2.0727 5.69734L1.4787 5.39468ZM6.66671 10C6.29852 10 6.00004 10.2985 6.00004 10.6667C6.00004 11.0349 6.29852 11.3333
		6.66671 11.3333V10ZM9.33337 11.3333C9.70156 11.3333 10 11.0349 10 10.6667C10 10.2985 9.70156 10 9.33337 10V11.3333ZM2.00004 7.33333C1.63185
		7.33333 1.33337 7.63181 1.33337 8C1.33337 8.36819 1.63185 8.66667 2.00004 8.66667V7.33333ZM14 8.66667C14.3682 8.66667 14.6667 8.36819 14.6667
		8C14.6667 7.63181 14.3682 7.33333 14 7.33333V8.66667ZM8.00004 2.66667C8.66294 2.66667 8.86361 2.67239 9.0118 2.7121L9.35689
		1.4242C8.99641 1.32761 8.5771 1.33333 8.00004 1.33333V2.66667ZM11.3334 4.66667C11.3334 4.08961 11.3391 3.6703 11.2425 3.30982L9.95461 3.65491C9.99431
		3.80309 10 4.00376 10 4.66667H11.3334ZM9.0118 2.7121C9.47192 2.83539 9.83132 3.19479 9.95461 3.65491L11.2425 3.30982C10.9959 2.38957 10.2771 1.67078
		9.35689 1.4242L9.0118 2.7121ZM8.00004 1.33333C7.42298 1.33333 7.00367 1.32761 6.64319 1.4242L6.98828 2.7121C7.13647 2.67239 7.33714 2.66667 8.00004
		2.66667V1.33333ZM6.00004 4.66667C6.00004 4.00376 6.00577 3.80309 6.04547 3.65491L4.75757 3.30982C4.66098 3.6703 4.66671 4.08961 4.66671
		4.66667H6.00004ZM6.64319 1.4242C5.72294 1.67078 5.00415 2.38957 4.75757 3.30982L6.04547 3.65491C6.16876 3.19479 6.52816 2.83539 6.98828
		2.7121L6.64319 1.4242ZM3.46671 5.33333H12.5334V4H3.46671V5.33333ZM14 6.8V11.8667H15.3334V6.8H14ZM12.5334 13.3333H3.46671V14.6667H12.5334V13.3333ZM2.00004 11.8667V6.8H0.666707V11.8667H2.00004ZM3.46671 13.3333C3.08234 13.3333 2.83416 13.3328 2.64526 13.3174C2.46416 13.3026 2.39701 13.2775 2.36405 13.2607L1.75873 14.4487C2.01098 14.5772 2.27313 14.6248 2.53669 14.6463C2.79247 14.6672 3.10434 14.6667 3.46671 14.6667V13.3333ZM0.666707 11.8667C0.666707 12.229 0.666189 12.5409 0.687087 12.7967C0.708621 13.0602 0.756165 13.3224 0.884694 13.5746L2.0727 12.9693C2.05591 12.9364 2.03079 12.8692 2.01599 12.6881C2.00056 12.4992 2.00004 12.251 2.00004 11.8667H0.666707ZM2.36405 13.2607C2.2386 13.1968 2.13662 13.0948 2.0727 12.9693L0.884694 13.5746C1.07644 13.951 1.3824 14.2569 1.75873 14.4487L2.36405 13.2607ZM14 11.8667C14 12.251 13.9995 12.4992 13.9841 12.6881C13.9693 12.8692 13.9442 12.9364 13.9274 12.9693L15.1154 13.5746C15.2439 13.3224 15.2915 13.0602 15.313 12.7967C15.3339 12.5409 15.3334 12.229 15.3334 11.8667H14ZM12.5334 14.6667C12.8957 14.6667 13.2076 14.6672 13.4634 14.6463C13.727 14.6248 13.9891 14.5772 14.2414 14.4487L13.636 13.2607C13.6031 13.2775 13.5359 13.3026 13.3548 13.3174C13.1659 13.3328 12.9177 13.3333 12.5334 13.3333V14.6667ZM13.9274 12.9693C13.8635 13.0948 13.7615 13.1968 13.636 13.2607L14.2414 14.4487C14.6177 14.2569 14.9236 13.951 15.1154 13.5746L13.9274 12.9693ZM12.5334 5.33333C12.9177 5.33333 13.1659 5.33385 13.3548 5.34928C13.5359 5.36408 13.6031 5.3892 13.636 5.406L14.2414 4.21799C13.9891 4.08946 13.727 4.04191 13.4634 4.02038C13.2076 3.99948 12.8957 4 12.5334 4V5.33333ZM15.3334 6.8C15.3334 6.43763 15.3339 6.12576 15.313 5.86998C15.2915 5.60642 15.2439 5.34427 15.1154 5.09202L13.9274 5.69734C13.9442 5.7303 13.9693 5.79745 13.9841 5.97856C13.9995 6.16745 14 6.41563 14 6.8H15.3334ZM13.636 5.406C13.7615 5.46991 13.8635 5.5719 13.9274 5.69734L15.1154 5.09202C14.9236 4.7157 14.6177 4.40973 14.2414 4.21799L13.636 5.406ZM3.46671 4C3.10434 4 2.79247 3.99948 2.53669 4.02038C2.27313 4.04191 2.01098 4.08946 1.75873 4.21799L2.36405 5.406C2.39701 5.3892 2.46416 5.36408 2.64526 5.34928C2.83416 5.33385 3.08234 5.33333 3.46671 5.33333V4ZM2.00004 6.8C2.00004 6.41563 2.00056 6.16745 2.01599 5.97856C2.03079 5.79745 2.05591 5.7303 2.0727 5.69734L0.884694 5.09202C0.756165 5.34427 0.708621 5.60642 0.687087 5.86998C0.666189 6.12576 0.666707 6.43763 0.666707 6.8H2.00004ZM1.75873 4.21799C1.3824 4.40973 1.07644 4.71569 0.884694 5.09202L2.0727 5.69734C2.13662 5.5719
		2.23861 5.46991 2.36405 5.406L1.75873 4.21799ZM6.66671 11.3333H9.33337V10H6.66671V11.3333ZM2.00004 8.66667H14V7.33333H2.00004V8.66667Z"
		      fill="black"></path>
	</svg>
</div>
</body>
</html>