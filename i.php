<?php
$url = 'https://cogentech.biz/txtv2/Main/send';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$phone = $_POST['phone'];

if (strlen($phone) == 11) {
  $phonex = substr($phone, 1);
} 
elseif (strlen($phone) == 10) {
  $phonex = $phone;
}

$message = 'Hi '.$fname.' '.$lname."
Sa bawat araw, sa bawat sandali
Ang nasa isip ko'y ikaw lamang lagi.

Tulad ng bituin sa kalangitan
Ikaw ang nagbibigay sigla sa puso ko't damdamin.

";
$params = array(
    'name' => 'From Sanjose, nagmamahal.',
    'recipient' => '+63'.$phonex,
    'msg' => $message,
    'replyTable_length' => 10
);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Host: cogentech.biz',
  'User-Agent: Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36',
  'Content-Type: application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With: XMLHttpRequest',
  'Origin: http://cogentech.biz',
  'Referer: http://cogentech.biz/txtv2/Main'
));
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
