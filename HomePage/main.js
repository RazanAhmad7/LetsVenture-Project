document.querySelector('#btn').addEventListener('click', function() {
    document.querySelector('.overflow-auto').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
  

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
    
 
document.getElementById('joinForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const phone = document.getElementById('userPhone').value;

  // Example: You can now send this data to a server using fetch() or an API call
  console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);

  // Close the modal
  const modalElement = document.getElementById('joinFormModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  modalInstance.hide();

  // Optionally, you could reset the form here
  document.getElementById('joinForm').reset();
});

