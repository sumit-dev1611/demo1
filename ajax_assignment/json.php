<?php
$servername = "excellencetechnologies.co.in";
$username = "excelarf";
$password = "**T0y*6z8e0c";
$dbname = "excelarf_sumitdb";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error)
  {
  die("Connection failed: " . $conn->connect_error);
  }

$sql = "SELECT * FROM userDetails ORDER BY id DESC LIMIT 5";
$info = mysqli_query($conn, $sql);
$results = array();
while ($row = mysqli_fetch_assoc($info))
  {
  $results[] = array(
    'id' => $row['id'],
    'name' => $row['name'],
    'email' => $row['email'],
    'message' => $row['message'],
    'date' => $row['date']
  );
  }

echo json_encode($results);
?>

