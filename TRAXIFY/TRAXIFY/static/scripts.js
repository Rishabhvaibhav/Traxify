// scripts.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    fetch('/search/?source=' + source + '&destination=' + destination)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('search-results');
            resultsDiv.innerHTML = '';
            data.train_data.forEach(train => {
                const trainInfo = document.createElement('div');
                trainInfo.innerHTML = `<p>${train.train_name} - Departure: ${train.departure_time}, Arrival: ${train.arrival_time}</p>`;
                resultsDiv.appendChild(trainInfo);
            });
        });
});
