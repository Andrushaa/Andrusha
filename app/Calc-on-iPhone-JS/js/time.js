const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

const UpdateTime = () => {
    const CurrentTime = new Date();

    const CurrentHour = CurrentTime.getHours();
    const CurrentMinute = CurrentTime.getMinutes();

    hour.textContent = CurrentHour.toString();
    minute.textContent = CurrentMinute.toString().padStart(2, '0');
}
setInterval(UpdateTime, 1000);
UpdateTime();