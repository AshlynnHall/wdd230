document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('closeBanner');

    const currentDay = new Date().getDay();
    const isMondayTuesdayWednesday = currentDay === 1 || currentDay === 2 || currentDay === 3;

    if (isMondayTuesdayWednesday) {
        banner.classList.remove('hidden');
    }

    closeButton.addEventListener('click', () => {
        banner.classList.add('hidden');
    });
});