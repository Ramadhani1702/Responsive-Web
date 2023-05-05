// Get the modal dialog element
const confirmationModal = document.getElementById("confirmationModal");

// Get the delete button element
const deleteButton = document.getElementById("deleteButton");

// Show the confirmation dialog when the delete button is clicked
function showConfirmation() {
  confirmationModal.style.display = "block";
}

// Hide the confirmation dialog when the cancel button is clicked
function hideConfirmation() {
  confirmationModal.style.display = "none";
}

// Delete the item when the Yes, delete button is clicked
function deleteItem() {
  // Here you can add your code to delete the item from the server
  alert("data berhasil dihapus");
  console.log("Item deleted");
  confirmationModal.style.display = "none";
  location.assign("dashboard.html");
}
