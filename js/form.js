function validateForm() {
  var form = document.forms[0];
  var name = form.name.value;
  var email = form.email.value;

  var nameRegex = /^[a-zA-Z]+$/; // regular expression for alphabetical characters only
  var emailRegex = /^\S+@\S+\.\S+$/; // regular expression for a valid email address

  if (name == "" && email == "") {
    alert("Silahkan Masukkan nama dan email!");
    return false;
  } else if (!name.match(nameRegex) && !email.match(emailRegex)) {
    alert("Nama harus terdiri dari karakter alfabet dan masukkan alamat email yang valid");
    return false;
  } 

  if (name == "") {
    alert("Silakan masukkan nama!");
    return false;
  } else if (!name.match(nameRegex)) {
    alert("Nama harus hanya berisi karakter abjad!");
    return false;
  } 

  if (email == "") {
    alert("Silakan masukkan email!");
    return false;
  } else if (!email.match(emailRegex)) {
    alert("Masukkan alamat email yang valid!");
    return false;
  }

  // more validation checks here

  return true; // if all checks pass
}

// validate with usename and password

function validateFormUser(){
  var form = document.forms[0];
  var name = form.name.value;
  var email = form.email.value;
  var username = form.username.value;
  var password = form.password.value;

  var nameRegex = /^[a-zA-Z]+$/; // regular expression for alphabetical characters only
  var emailRegex = /^\S+@\S+\.\S+$/; // regular expression for a valid email address

  if (name == "" && email == "" && username == "" && password == "") {
    alert("Masukkan nama, email, username, dan password!");
    return false;
  } else if (!name.match(nameRegex) && !email.match(emailRegex)) {
    alert("Nama harus terdiri dari karakter alfabet dan masukkan alamat email yang valid!");
    return false;
  } 

  if (name == "" || email == "" || username == "" || password == "") {
    alert("Harap isi semua data input!");
    return false;
  }

  if (name == "") {
    alert("Silakan masukkan nama Anda!");
    return false;
  } else if (!name.match(nameRegex)) {
    alert("Nama harus hanya berisi karakter abjad!");
    return false;
  } 

  if (username == "") {
    alert("Silakan masukkan Username Anda!");
    return false;
  } 

  if (password == "") {
    alert("Silakan masukkan Password Anda!");
    return false;
  }

  if (email == "") {
    alert("Silakan masukkan Email Anda!");
    return false;
  } else if (!email.match(emailRegex)) {
    alert("Silakan masukkan Email Anda dengan benar!");
    return false;
  }

  // more validation checks here

  return true; // if all checks pass

}

function validateFormKelas() {
  var form = document.forms[0];
  var kelas = form.kelas.value;
  var code = form.code.value;

  if (kelas == "" && code == "") {
    alert("Silahkan masukkan nama kelas dan code guru!");
    return false;
  }

  if (kelas == "") {
    alert("Silahkan masukkan nama kelas!");
    return false;
  } 

  if (code == "") {
    alert("Silahkan masukkan code guru!");
    return false;
  } 

  // more validation checks here

  return true; // if all checks pass
}


