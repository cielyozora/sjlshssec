let previousFormData = '';

function formsubmit() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const phone = document.getElementById('phone').value;
  const formdata = `fname=${fname}&lname=${lname}&phone=${phone}`;

  // validate the form input
  if (fname === '' || lname === '' || phone === '') {
    alert('Please fill out all fields');
    return false;
  }

  if (formdata === previousFormData) {
    alert('Form data is the same as previous submission. Please scan a new QR code.');
    return false;
  }

  // AJAX code to submit form.
  $.ajax({
    type: 'POST',
    url: 'i.php', //call storeemdata.php to store form data
    data: formdata,
    cache: false,
    success: function (html) {
      alert('Scan Complete!');
      previousFormData = formdata;
      //document.getElementById('form').reset();
    },
    error: function () {
      alert('Error submitting form. Please try again later.');
    }
  });
  return false;
}
