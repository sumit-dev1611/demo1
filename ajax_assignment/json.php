<?php
$servername = "localhost";
$username = "root";
$password = "123";
$dbname = "sumitdb";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error)
  {
  die("Connection failed: " . $conn->connect_error);
  }

$sql = "SELECT * FROM userDetails ORDER BY name DESC LIMIT 5";
$info = mysqli_query($conn, $sql);
$results = array();

while ($row = mysqli_fetch_assoc($info))
  {
  $results[] = array(
    'name' => $row['name'],
    'email' => $row['email'],
    'message' => $row['message'],
    'date' => $row['date']
  );
  }

echo json_encode($results);
?>

