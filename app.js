document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = {
        records: [
            {
                fields: {
                    Name: name,
                    Email: email
                }
            }
        ]
    };

    try {
        const response = await fetch('https://api.airtable.com/v0/appUKI4UfGLtQD8qT/Table%201', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer patDkfinbKlYU0DpG.f978742fd943569b346ad906cf03d9082fee924260ff34d25feb0767f0b62f78',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            document.getElementById('responseMessage').innerText = 'Thank you! We will reach out and provide follow-up assistance about our AI chatbot soon.';
        } else {
            document.getElementById('responseMessage').innerText = 'Error submitting your information. Please try again.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Error submitting your information. Please try again.';
    }
});
