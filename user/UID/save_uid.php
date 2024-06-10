<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST['data'];
    $file = 'uid.txt';

    if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX)) {
        echo 'success';
    } else {
        echo 'error';
    }
} else {
    echo 'Invalid request';
}
?>
