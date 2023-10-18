<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$data = json_decode(file_get_contents("php://input"), true);
$newSearch = $data["searchValue"];
$file = fopen("search.csv", "a");
fputcsv($file, [$newSearch]);
fclose($file);
?>
