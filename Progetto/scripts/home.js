let currentStop = 1;

document.getElementById('next').addEventListener('click', () => {
    currentStop++;
    if (currentStop > 4) {
        currentStop = 1;
    }
    showStop(currentStop);
});

function showStop(stopNumber) {
    const stops = document.querySelectorAll('section');
    stops.forEach((stop) => {
        stop.style.display = 'none';
    });
    document.getElementById(`stop-${stopNumber}`).style.display = 'block';
}

showStop(currentStop);