const on = document.getElementById('yes');
const off = document.getElementById('no');
const bulb = document.getElementById('bulb');
const bulb = document.getElementById('bulbOff');
const alarm = document.getElementById('alarmer1');

let message = document.getElementById('statusMessage');

on.addEventListener('click', () => {
 bulb.src = './bulbYes.gif';
 alarm.play();
 message.textContent = 'Power Restored';
});

off.addEventListener('click', () => {
 bulb.src = './bulbNo.gif';
 alarm.pause();
 message.textContent = 'Power Off';
});