<?php
$servername = "localhost";
$username = "root";     // ถ้าใช้ XAMPP ค่า default คือ root
$password = "";         // ถ้า XAMPP ค่า default คือ ค่าว่าง
$dbname = "mydb";       // ตั้งชื่อตามฐานข้อมูลของคุณ

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("เชื่อมต่อฐานข้อมูลล้มเหลว: " . $conn->connect_error);
}
?>
