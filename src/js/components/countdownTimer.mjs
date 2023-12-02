export function countdownTimer(date, placement) {
  const endDate = new Date(date).getTime();

  const counter = setInterval(function updateCount() {
    const currentTime = new Date().getTime();
    const timeDifference = endDate - currentTime;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    days = String(days).padStart(2, "0");
    let hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hours = String(hours).padStart(2, "0");
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    minutes = String(minutes).padStart(2, "0");
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    seconds = String(seconds).padStart(2, "0");

    placement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDifference < 0) {
      clearInterval(counter);
      placement.innerText = "EXPIRED";
    }
  }, 1000);
}
