<?php
header('Content-Type: text/plain');
$start = $_POST['start'] ?? '';
$length = $_POST['length'] ?? '';
$trav = $_POST['trav'] ?? '';
$state = $_POST['state'] ?? '';
$ts = date('c');
$line = implode(',', [str_replace(',', ' ', $ts), $start, $length, $trav, $state]) . "
";
$file = __DIR__ . '/cms/leads.csv';
file_put_contents($file, $line, FILE_APPEND | LOCK_EX);
echo 'OK';
?>
