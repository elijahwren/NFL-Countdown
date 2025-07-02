//set target date and time
const targetDate = new Date('September 4, 2025 19:20:00').getTime();

//update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  //time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display the countdown
  document.getElementById('countdown').innerHTML =
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  //if the countdown is over
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "GAMETIME!";
  }
}, 1000);