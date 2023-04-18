console.log('funguju!');


const times = [
  {
    hours: 12,
    minutes: 34,
  },
  {
    hours: 6,
    minutes: 45,
  },
  {
    hours: 14,
    minutes: 5,
  },
  {
    hours: 8,
    minutes: 5,
  },
];

const Clock = (props) => {
  const { hours, minutes } = props;
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');


  return `
<div class="clock">
      <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
    </div>
`
}

const app = document.querySelector('#app');
app.innerHTML = times
  .map((time) => Clock(time))
  .join('');