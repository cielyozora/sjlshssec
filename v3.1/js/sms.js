function formsubmit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var phone = document.getElementById('phone').value;
    //store all the submitted data in astring.
    var formdata = 'fname=' + fname + '&lname=' + lname + '&phone=' + phone;
  // validate the form input

    console.log(formdata);
  if (fname == '' ) {
    alert("Please Enter Name");
    return false;
  }
  if(lname == '') {
    alert("Please Enter Surname");
    return false;
  }
  if(phone == '') {
    alert("Please Enter Phone");
    return false;
  }

  else {
  // AJAX code to submit form.
  $.ajax({
     type: "POST",
     url: "https://sjlshsx.000webhostapp.com/i.php", //call storeemdata.php to store form data
     data: formdata,
     cache: false,
     success: function(html) {
      alert(html);
     }
  });
  }
  return false;
}