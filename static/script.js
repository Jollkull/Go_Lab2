document.addEventListener('DOMContentLoaded', function() {
    const calculator1 = document.getElementById('calculator1');
    if (calculator1) {
        calculator1.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const inputs = Array.from(this.querySelectorAll('input')).map(input => parseFloat(input.value));
            
            try {
                const response = await fetch('/api/calculator1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ values: inputs }),
                });
                
                const data = await response.json();
                document.getElementById('result').textContent = data.result;
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('result').textContent = 'Error calculating results';
            }
        });
    }
});