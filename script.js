const toggleTheme = document.getElementById('toogle-theme');
const body = document.body;
const wrapper = document.querySelector('.wrapper');

toggleTheme.addEventListener('change', () => {
    body.classList.toggle('dark', toggleTheme.checked);
    wrapper.classList.toggle('dark', toggleTheme.checked);


    

});
function updateDateTime() {
    const now = new Date();

    // Format the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Format the time
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Display the date and time
    document.getElementById('current-date').innerText = dateString;
    document.getElementById('current-time').innerText = timeString;

    // Display the current week's dates
    displayWeekDates(now);
}

function displayWeekDates(currentDate) {
    const weekStart = new Date(currentDate);
    const weekDates = [];

    // Set the start of the week (Sunday)
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());

    // Generate the dates for the week
    for (let i = 0; i < 7; i++) {
        const weekDate = new Date(weekStart);
        weekDate.setDate(weekStart.getDate() + i);
        weekDates.push(weekDate.getDate()); // Get the date (day of the month)
    }

    // Update the HTML with the week's dates
    for (let i = 0; i < weekDates.length; i++) {
        document.getElementById(`date${i}`).innerText = weekDates[i];
    }
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to set the date and time immediately when the page loads
updateDateTime();
