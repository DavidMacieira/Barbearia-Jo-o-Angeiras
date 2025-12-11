<?php
$host = "sqlXXX.infinityfree.com"; // substitui pelo teu host
$dbname = "if0_40651736_Barbearia";          // substitui pelo nome da DB
$user = "if0_40651736";          // substitui pelo teu username
$pass = "password_da_DB";          // substitui pelo password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Erro na ligação à base de dados: " . $e->getMessage());
}
?>
