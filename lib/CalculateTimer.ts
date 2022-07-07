export default function calculateTimer(time: number): (number | string)[] {
  let hours: number = Math.floor(time / 3600);
  let minutes: number = Math.floor((time - hours * 3600) / 60);
  let seconds: number = time - hours * 3600 - minutes * 60;

  return [
    hours < 10 ? `0${hours}` : hours,
    minutes < 10 ? `0${minutes}` : minutes,
    seconds < 10 ? `0${seconds}` : seconds,
  ];
}
