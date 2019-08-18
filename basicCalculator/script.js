const screen = document.querySelector('#inScr'); // grab small screen

const removeOne = () => {
	// delete function
	let screenValue = screen.value; //assign value of screen to screenValue variable
	const arrayFromScreen = Array.from(screenValue); // creates an array from value gotten from screen
	arrayFromScreen.pop(); // removes the last inputed value
	let newValue = ''; // contains an empty string which holds the remaining value after the last value has been popped
	for (let i = 0; i < arrayFromScreen.length; i++) {
		newValue += arrayFromScreen[i]; // for loop collects the remaining value and sends it back to 'var newValue'
	}
	screen.value = newValue; // displays the new value on the screen
};
