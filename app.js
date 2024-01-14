const daysContainer = document.getElementById("days");
const monthYearElement = document.getElementById("month-year");

let currentDate = new Date();

function renderCalendar() {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    monthYearElement.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

    let daysHTML = '';

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        daysHTML += '<div class="day"></div>';
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        daysHTML += `<div class="day" onclick="showEvents(${i})">${i}</div>`;
    }

    daysContainer.innerHTML = daysHTML;
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function showEvents(day) {
    const eventDescription = prompt("Enter event details:");
    if (eventDescription) {
        alert(`Event on ${currentDate.toLocaleString('default', { month: 'long' })} ${day}: ${eventDescription}`);
    }
}

renderCalendar();
