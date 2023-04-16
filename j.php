<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$phone = $_POST['phone'];

echo $fname;
echo $lname;
echo $phone;


// Open the file for writing
/*
$file = fopen("data.txt", "a");

// Write the data to the file
fwrite($file, "First Name: " . $fname . "\n");
fwrite($file, "Last Name: " . $lname . "\n");
fwrite($file, "Phone: " . $phone . "\n");

// Close the file
fclose($file);

echo "Data saved to file.";
///////
*/
?>