<?php
header('Content-Type: application/json');

$favorites = [];
$file = fopen("favorites.csv", "r");

while (($line = fgetcsv($file)) !== FALSE) {
  $favorites[] = $line[0];
}

fclose($file);

echo json_encode($favorites);
