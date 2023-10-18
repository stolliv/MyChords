<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $content = file_get_contents("php://input");
  $data = json_decode($content, true);

  if (isset($data["title"])) {
    $file = fopen("favorites.csv", "a");
    fputcsv($file, [$data["title"]]);
    fclose($file);
  }
}
