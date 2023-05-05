// Get the modal dialog element
const confirmationModal = document.getElementById("confirmationModal");

// Get the delete button element
const addButton = document.getElementById("addButton");

function validateForm() {
  const itemName = document.getElementById("itemName").value;

  if (itemName.length < 1) {
    alert("TIDAK BOLEH KOSONG KIDZ");
    return false;
  }

  return true;
}

// Show the confirmation dialog when the delete button is clicked
function showConfirmation() {
  confirmationModal.style.display = "block";
}

// Hide the confirmation dialog when the cancel button is clicked
function hideConfirmation() {
  confirmationModal.style.display = "none";
}

// Delete the item when the Yes, delete button is clicked
function addItem() {
  const isValid = validateForm();

  if (!isValid) {
    return;
  }


  // Here you can add your code to delete the item from the server
  alert("data berhasil ditambah");
  console.log("Item deleted");
  confirmationModal.style.display = "none";
  location.assign("dashboard.html");
}

function addKelas() {
  const isValid = validateFormKelas();

  if (!isValid) {
    return;
  }


  // Here you can add your code to delete the item from the server
  alert("data berhasil ditambah");
  console.log("Item deleted");
  confirmationModal.style.display = "none";
  location.assign("dashboard.html");
}

function editUser() {
  const isValidUser = validateFormUser();

  if (!isValidUser) {
    return;
  }

  // Here you can add your code to delete the item from the server
  alert("data berhasil diedit");
  console.log("Item deleted");
  confirmationModal.style.display = "none";
  location.assign("dashboard.html");
}
