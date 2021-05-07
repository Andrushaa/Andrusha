const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

const UpdateTime = () => {
    const CurrentTime = new Date();

    let CurrentHour = CurrentTime.getHours();
    const CurrentMinute = CurrentTime.getMinutes();

    hour.textContent = CurrentHour.toString();
    minute.textContent = CurrentMinute.toString();
}
setInterval(UpdateTime, 1000);
UpdateTime();