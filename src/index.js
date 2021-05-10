import './sass/main.scss';

const refs = {
  clockFace: document.querySelector('.timer')
}


const timer = {
  start() {
    const startTime = new Date();
 
    setInterval (() => {
      const currentTime = new Date('Jan 1, 2022');
      const startTime = new Date();
      const deltaTime = currentTime-startTime;
      const time = getTimeComponents(deltaTime);
      updateClockface(time);
    },1000);
  },
};

timer.start();

function updateClockface({days,hours,mins,secs}) {
  refs.clockFace.textContent = `${days}:${hours}:${mins}:${secs}`
}

function pad(value) {
  return String(value).padStart(2,'0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return {days,hours,mins,secs}
}


// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2021'),
//   });