const englishOption = document.getElementById('englishOption');
        const arabicOption = document.getElementById('arabicOption');
        const englishForm = document.getElementById('englishForm');
        const arabicForm = document.getElementById('arabicForm');
        const arabicTitle = document.getElementById('arabicTitle');
        const englishTitle = document.getElementById('englishTitle');

        // Add event listeners for the radio buttons
        englishOption.addEventListener('change', function() {
            if (this.checked) {
                englishTitle.style.display = 'block';
                englishForm.style.display = 'block';
                arabicForm.style.display = 'none';
                arabicTitle.style.display = 'none';
            }
        });

        arabicOption.addEventListener('change', function() {
            if (this.checked) {
                arabicTitle.style.display = 'block';
                englishTitle.style.display = 'none'
                englishForm.style.display = 'none';
                arabicForm.style.display = 'block';
            }
        });