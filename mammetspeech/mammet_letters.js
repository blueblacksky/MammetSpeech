const mammetLetters = (i, character) => {
	if (i === 0)
		return Math.random() < .1? character : character.toUpperCase();
	else
		if (character === 'i' || character === 'I')
			return 'i';
		if (character === 'l' || character === 'L')
			return "L";
		else
			return Math.random() < .6? character : character.toUpperCase();
};

const mammetWords = (word) => {
	let newWord = "";
	for (let i = 0; i < String(word).length; i++){
		let newChar = mammetLetters(i, String(word).charAt(i));
		if (i === String(word).length - 1 && i !== 0){
			if (!hasUpperCase(newWord + newChar))
				newWord = newWord + newChar.toUpperCase();
			else if (!hasLowerCase(newWord + newChar))
				newWord = newWord + newChar.toLowerCase();
			else
				newWord = newWord + newChar;
		}
		else
			newWord = newWord + newChar;
	}
	return newWord + " ";
};

const hasUpperCase = (word) => {
	return (/[A-Z]/.test(word));
};

const hasLowerCase = (word) => {
	return (/[a-z]/.test(word));
};

const convertInput = () => {
	let text = document.getElementById('inputTextArea').value;
	let output = "";
	let inputArray = text.split(" ");
	for (let i = 0; i < inputArray.length; i++) {
		output = output + mammetWords(inputArray[i]);	
	}
	let outputTextArea = document.getElementById('outputText');
	outputTextArea.innerHTML = output;
}
