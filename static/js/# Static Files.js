# Static Files

## 1. static/css/style.css
```css
/* Custom styles to complement Bootstrap */

.card {
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.table {
    vertical-align: middle;
}

.badge {
    font-size: 0.9em;
    padding: 0.5em 0.75em;
}

.status-select {
    min-width: 120px;
}

.feather {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
}

.navbar .feather {
    margin-right: 0.25rem;
}

/* Dark mode specific styles */
[data-bs-theme="dark"] .card {
    background-color: var(--bs-dark);
    border-color: var(--bs-gray-700);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .table-responsive {
        margin-bottom: 1rem;
        border: 0;
    }
}
```

## 2. static/js/dashboard.js
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Handle status changes
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', function() {
            const problemId = this.dataset.problemId;
            const form = new FormData();
            form.append('status', this.value);
            
            fetch(`/update_problem/${problemId}`, {
                method: 'POST',
                body: form
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update status');
                }
                // Reload page to show updated status
                window.location.reload();
            }).catch(error => {
                console.error('Error:', error);
                alert('Failed to update status');
            });
        });
    });

    // Handle search
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});
```

## 3. static/js/chart-config.js
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Difficulty Chart
    const difficultyCtx = document.getElementById('difficultyChart').getContext('2d');
    new Chart(difficultyCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(statsData.difficulty),
            datasets: [{
                data: Object.values(statsData.difficulty),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 99, 132, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Status Chart
    const statusCtx = document.getElementById('statusChart').getContext('2d');
    new Chart(statusCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statsData.status),
            datasets: [{
                data: Object.values(statsData.status),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});
```
