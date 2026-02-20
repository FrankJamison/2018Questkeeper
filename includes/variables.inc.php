<?php

// Database Connection Variables
$host = "localhost";
$web_user = "";
$pwd = "";
$dbname = "";
$charset = "utf8";

// Load environment-specific DB credentials if present.
// Local dev (localhost) should prefer db.local.inc.php; deployed environments should prefer db.config.inc.php.
$hostHeader = $_SERVER['HTTP_HOST'] ?? ($_SERVER['SERVER_NAME'] ?? '');
$isLocalHost = $hostHeader !== '' && (
    stripos($hostHeader, 'localhost') !== false ||
    $hostHeader === '127.0.0.1'
);

$dbConfigPath = __DIR__ . '/db.config.inc.php';
$dbLocalPath = __DIR__ . '/db.local.inc.php';

if ($isLocalHost) {
    if (is_file($dbLocalPath)) {
        require $dbLocalPath;
    } elseif (is_file($dbConfigPath)) {
        require $dbConfigPath;
    }
} else {
    if (is_file($dbConfigPath)) {
        require $dbConfigPath;
    } elseif (is_file($dbLocalPath)) {
        require $dbLocalPath;
    }
}
$dbc = 0;

// Login Form Input Variables
$loginUsername = '';
$loginPassword = '';
$loginMd5HashPwd = '';

// Registration Form Input Variables
$registrationFirstName = "";
$registrationLastName = "";
$registrationEmailAddress = "";
$registrationUsername = "";
$registrationPassword = "";
$registrationMd5HashPwd = "";

$validFirstName = "";
$validLastName = "";
$validEmailAddress = "";
$validUsername = "";
$validPassword = "";

// Database Member Variables
$storedMemberID = '';
$storedMemberUsername = '';
$storedMemberPassword = '';
$storedMemberFirstName = '';
$storedMemberLastName = '';

?>