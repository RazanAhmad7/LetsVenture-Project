
fetch('../Components/navbar.html').then((response)=>response.text()).then(data=>
    {
        document.getElementById("navbar").innerHTML = data;
    }
    );


    fetch('../Components/footer.html').then((response)=>response.text()).then(data=>
        {
            document.getElementById("myFooter").innerHTML = data;
        }
        );

        document.addEventListener('DOMContentLoaded', function () {
            const buttons = document.querySelectorAll('.filter-btn');
            const keyFeaturesSection = document.getElementById('keyFeaturesSection');
            const adventuresSection = document.getElementById('adventuresSection');
            const reviewsSection = document.getElementById('reviewsSection');

            // Initially show the adventures section
            adventuresSection.style.display = 'flex';

            // Function to show a section and hide the others
            function showSection(sectionToShow) {
                adventuresSection.style.display = 'none';
                keyFeaturesSection.style.display = 'none';
                reviewsSection.style.display = 'none';

                if (sectionToShow === 'adventures') {
                    adventuresSection.style.display = 'flex'; // Show Adventures
                } else if (sectionToShow === 'keyFeatures') {
                    keyFeaturesSection.style.display = 'flex'; // Show Key Features
                } else if (sectionToShow === 'reviews') {
                    reviewsSection.style.display = 'block'; // Show Reviews
                }
            }

            // Loop through all buttons and add event listeners
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    buttons.forEach(btn => btn.classList.remove('active'));

                    // Add active class to the clicked button
                    button.classList.add('active');

                    // Show the relevant section
                    if (button.id === 'adventuresBtn') {
                        showSection('adventures'); // Show Adventures
                    } else if (button.id === 'keyFeaturesBtn') {
                        showSection('keyFeatures'); // Show Key Features
                    } else if (button.id === 'reviewsBtn') {
                        showSection('reviews'); // Show Reviews
                    }
                });
            });
        });
        
        
        
              