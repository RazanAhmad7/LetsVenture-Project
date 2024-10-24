  function submitForm() {
    // Get the form values
    var title = document.getElementById("adventureTitle").value;
    var date = document.getElementById("adventureDate").value;
    var location = document.getElementById("adventureLocation").value;
    var price = document.getElementById("adventurePrice").value;
    var status = document.getElementById("adventureStatus").value;

    // Find the table
    var table = document.querySelector("tbody");

    // Create a new row
    var row = document.createElement("tr");

    // Create the columns
    row.innerHTML = `
      <th scope="row">New</th>
      <td>${title}</td>
      <td>${date}</td>
      <td>${location}</td>
      <td>${price} JO</td>
      <td><span class="badge ${status === 'Booked' ? 'bg-success' : status === 'Pending' ? 'bg-warning' : 'bg-danger'}">${status}</span></td>
      <td><a href="#" class="btn btn-primary">Edit</a> <a href="#" class="btn btn-danger">Delete</a></td>
    `;

    // Append the new row to the table
    table.appendChild(row);

    // Reset the form
    document.getElementById("adventureForm").reset();

    // Close the modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('addAdventureModal'));
    modal.hide();
  }