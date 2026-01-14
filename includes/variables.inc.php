<?php

// Database Connection Variables
$host = "localhost";
$web_user = "";
$pwd = "";
$dbname = "";
$charset = "utf8";

// Load environment-specific DB credentials if present (git-ignored)
// Prefer local overrides first, then fall back to the deployment config.
$dbLocalPath = __DIR__ . '/db.local.inc.php';
if (is_file($dbLocalPath)) {
    require $dbLocalPath;
} else {
    $dbConfigPath = __DIR__ . '/db.config.inc.php';
    if (is_file($dbConfigPath)) {
        require $dbConfigPath;
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