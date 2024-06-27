<?php
session_start();
require 'config.php'; // Include your database configuration

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['uname'];
    $password = $_POST['password'];

    // Check if the fields are not empty
    if (empty($username) || empty($password)) {
        echo 'Please fill in all fields.';
        exit;
    }

    // Prepare and execute SQL statement
    $stmt = $conn->prepare('SELECT id, username, password FROM users WHERE username = ?');
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();

    // Check if user exists
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $username, $hashed_password);
        $stmt->fetch();

        // Verify password
        if (password_verify($password, $hashed_password)) {
            // Password is correct, start session
            $_SESSION['userid'] = $id;
            $_SESSION['username'] = $username;
            header('Location: profile.php');
            exit;
        } else {
            echo 'Invalid password.';
        }
    } else {
        echo 'No user found with that username.';
    }

    $stmt->close();
}
?>
