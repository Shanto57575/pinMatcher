function getPin() {
    const pin = Math.floor(Math.random() * 10000);
    const pinSize = pin + '';
    if (pinSize.length === 4) return pin;
    else return getPin();
}

document.getElementById('pinGenerate').addEventListener('click', function () {
    const thePin = document.getElementById('thePin');
    thePin.value = getPin();
})

document.getElementById('calcButton').addEventListener('click', function (event) {
    const display = event.target.innerText;
    const previousScreen = document.getElementById('inputField');
    const previousValue = previousScreen.value;
    if (isNaN(display)) {
        if (display === '<') {
            const digit = previousValue.slice(0, -1);
            previousScreen.value = digit;
        }
        else if(display === 'C'){
            previousScreen.value = '';
        }
    }
    else{
        const newScreen = previousScreen.value + display;
        previousScreen.value = newScreen;
    }
    
})

document.getElementById('matchButton').addEventListener('click',function(){
    const pin = document.getElementById('thePin');
    const pinValue = pin.value;
    const screenField = document.getElementById('inputField');
    const screenValue = screenField.value;
    
    const rShow = document.getElementById('right');
    const wShow = document.getElementById('wrong');

    if(pinValue===screenValue){
        rShow.style.display = 'block';
        wShow.style.display = 'none';
    }
    else{
        wShow.style.display = 'block';
        rShow.style.display = 'none';
    }
})