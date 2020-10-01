function lightsOff(){
    document.body.classList.toggle('darkMode');
    if(document.getElementById('lightSwitch')){
        document.getElementById('lightSwitch').id = 'onSwitch';
    }
    else{
        document.getElementById('onSwitch').id = 'lightSwitch';
    }
}