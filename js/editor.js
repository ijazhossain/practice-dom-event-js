const inputField = document.getElementById('text-field');
// const inputValue = inputField.value;

// For bold
document.getElementById('bold-btn').addEventListener('click', function () {

    if (inputField.style.fontWeight == 'bold') {
        inputField.style.fontWeight = 'normal';
    } else {
        inputField.style.fontWeight = 'bold';

    }
});

// For italic
document.getElementById('italic-btn').addEventListener('click', function () {

    if (inputField.style.fontStyle == 'italic') {
        inputField.style.fontStyle = 'normal';
    } else {
        inputField.style.fontStyle = 'italic';
    }
});
// FOR UNDER LINE
document.getElementById('underline-btn').addEventListener('click', function () {

    if (inputField.style.textDecoration == 'underline') {
        inputField.style.textDecoration = 'none';
    } else {
        inputField.style.textDecoration = 'underline';
    }
});

// For left align
document.getElementById('left-align-btn').addEventListener('click', function () {
    inputField.style.textAlign = 'left';
})
// For center align
document.getElementById('center-align-btn').addEventListener('click', function () {
    inputField.style.textAlign = 'center';

})
// for right align
document.getElementById('right-align-btn').addEventListener('click', function () {
    inputField.style.textAlign = 'right';
})
// for justify
document.getElementById('justify-btn').addEventListener('click', function () {
    inputField.style.textAlign = 'justify';
})
// increase and decrease font size

document.getElementById('font-size-number').addEventListener('input', function (event) {
    const fontAmountField = document.getElementById('font-size-number');
    if (fontAmountField.value >= 14) {
        inputField.style.fontSize = event.target.value + 'px';
    } else {
        inputField.style.fontSize = '14px';
    }
})

// text color change
document.getElementById('color-change').addEventListener('input', function (event) {
    inputField.style.color = event.target.value;
})

/* // make toggle
document.getElementById('toggle-case').addEventListener('click', function () {
    console.log('clicked');
    const splitInputValue = inputField.value.toUpperCase().split('');
    console.log(splitInputValue[0].toLowerCase());
    console.log(splitInputValue[0].toLowerCase() + splitInputValue.slice(1).join(''));
    inputField.value = inputField.value.charAt(0).toLowerCase() + splitInputValue.slice(1).join('');

}) */

// capitalized
document.getElementById('capitalized').addEventListener('click', function () {
    if (inputField.style.textTransform == 'capitalize') {
        inputField.style.textTransform = 'none';
    } else {
        inputField.style.textTransform = 'capitalize';
    }

})
// capitalized
document.getElementById('upper-case').addEventListener('click', function () {
    if (inputField.style.textTransform == 'uppercase') {
        inputField.style.textTransform = 'none';
    } else {
        inputField.style.textTransform = 'uppercase';
    }

})
// capitalized
document.getElementById('lower-case').addEventListener('click', function () {
    if (inputField.style.textTransform == 'lowercase') {
        inputField.style.textTransform = 'none';
    } else {
        inputField.style.textTransform = 'lowercase';
    }

})
