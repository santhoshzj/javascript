
        const searchInput = document.querySelector('.search input');
        const movieItems = document.querySelectorAll('.movie-item');

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            movieItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const genre = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || genre.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
