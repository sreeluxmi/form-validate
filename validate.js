$(document).ready(function () {
  // Validate Username
  $("#usercheck").hide();
  let usernameError = true;
  $("#username").keyup(function () {
    validateUsername();
  });

  function validateUsername() {
    let usernameValue = $("#username").val();
    if (usernameValue.length == "") {
      $("#usercheck").show();
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 8) {
      $("#usercheck").show();
      $("#usercheck").html("length of username must be between 3 and 8");
      usernameError = false;
      return false;
    } else {
      $("#usercheck").hide();
    }
  }

  //Validate email

  $("#emailcheck").hide();
  let emailError = true;
  $("#email").keyup(function () {
    validateEmail();
  });

  function validateEmail() {
    let emailValue = $("#email").val();
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (emailValue === "") {
      $("#emailcheck").show();
      $("#emailcheck").html("Email is required");
      emailError = false;
      return false;
    } else if (!regex.test(emailValue)) {
      $("#emailcheck").show();
      $("#emailcheck").html("Invalid email format");
      emailError = false;
      return false;
    } else {
      $("#emailcheck").hide();
      emailError = true;
    }
  }

  //validate password
  $("#passwordcheck").hide();
  let passwordError = true;
  $("#password").keyup(function () {
    validatePassword();
  });

  function validatePassword() {
    let passwordValue = $("#password").val();
    if (passwordValue.length == "") {
      $("#passwordcheck").show();
      passwordError = false;
      return false;
    }
    if (passwordValue.length < 3 || passwordValue.length > 10) {
      $("#passwordcheck").show();
      $("#passwordcheck").html("length of password must be between 3 and 10");
      passwordError = false;
      return false;
    } else {
      $("#passwordcheck").hide();
    }
  }

  //validate confrim password

  $("#con-passwordcheck").hide();
  let confirmPasswordError = true;
  $("#con-password").keyup(function () {
    validateConfirmPassword();
  });
  function validateConfirmPassword() {
    let passwordValue = $("#password").val();
    let confirmPasswordValue = $("#con-password").val();
    if (passwordValue != confirmPasswordValue) {
      $("#con-passwordcheck").show();
      $("#con-passwordcheck").html("Password didnt match");
      $("#con-passwordcheck").css("color", "red");
      confirmPasswordError = false;
      return false;
    } else {
      $("#con-passwordcheck").hide();
    }
  }

  //submit button
  $("#submitbtn").click(function () {
    validateUsername();
    validatePassword();
    validateConfirmPassword();

    if (
      usernameError == true &&
      passwordError == true &&
      confirmPasswordError == true &&
      emailError == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});





