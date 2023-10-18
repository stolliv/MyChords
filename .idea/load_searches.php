<?php
$lines = array_map('str_getcsv', file('search.csv'));
$searches = [];
foreach ($lines as $line) {
  $searches[] = $line[0];
}
$searches = array_reverse($searches);
$searches = array_slice($searches, 0, 10);
echo json_encode($searches);
?>
