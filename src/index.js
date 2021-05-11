import './sass/main.scss';

// const refs = {
//   clock: document.querySelector('.timer'),
// }


// class Timer {
//   consrtuctor ({targetDate,onTick}) {
//     this.targetDate = targetDate;
//     this.intervalId = null;
//     this.onTick = onTick;
//   }

//   start() {
//     const currentTime = Date.now();
//     this.intervalId = setInterval (() => {
        
//         const startTime = this.targetDate;
//         const deltaTime = startTime - currentTime;
//         const time = this.getTimeComponents(deltaTime);
//         this.onTick(time);
//       },1000);
//   }

//   getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
//     return {days,hours,mins,secs}
//   }

//   pad(value) {
//     return String(value).padStart(2,'0');
//   }
// };

// const timer = new Timer({
//   targetDate: new Date('Jul 17, 2021'),
//   onTick: updateClockface,
// });

// timer.start();


// function updateClockface({days,hours,mins,secs}) {
//   refs.clock.textContent = `${days}:${hours}:${mins}:${secs}`
// }

// // function updateClockface({ days ='00', hours = '00', mins ='00', secs='00' }) {
// //   refs.days.textContent = `${days}`;
// //   refs.hours.textContent = `${hours}`;
// //   refs.minutes.textContent = `${mins}`;
// //   refs.seconds.textContent = `${secs}`;
// // }



const refs = {
  clock: document.getElementById('#timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
}

class Timer {
  constructor({ selector, targetDate, onTick}) {
    this.targetDate = targetDate;
    this.intervalId = null;
    this.onTick = onTick;
  }

  start  = () => {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const startTime= this.targetDate;
      const deltaTime = startTime- currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  targetDate: new Date('Jan 01, 2022'),
  onTick: updateClockface,
});

function updateClockface({days,hours,mins,secs}) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}

timer.start()