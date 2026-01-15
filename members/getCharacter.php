<?php

require_once(__DIR__ . '/../includes/bootstrap.inc.php');

// Debug Flag
$debug = false;

// Error Reporting
error_reporting(E_ALL);
ini_set('display_errors', '1');
$error_text = "";

// Includes
require_once('../includes/constants.inc.php');
require_once('../includes/variables.inc.php');
require_once('../includes/session.inc.php');

// Connect to Database
header('Content-Type: application/json; charset=utf-8');

if (!function_exists('mysqli_connect')) {
    http_response_code(500);
    echo json_encode(['error' => 'QuestKeeper error: PHP mysqli extension is not enabled. Enable/ install mysqli for your PHP runtime.']);
    exit;
}

$dbc = @mysqli_connect($host, $web_user, $pwd, $dbname);
if (!$dbc) {
    http_response_code(500);
    $message = 'QuestKeeper error: failed to connect to MySQL. Check includes/db.local.inc.php (preferred) or includes/db.config.inc.php.';
    $isLocal = isset($_SERVER['HTTP_HOST']) && stripos($_SERVER['HTTP_HOST'], 'localhost') !== false;
    if ($isLocal) {
        $message .= ' MySQL error: ' . mysqli_connect_error();
    }
    echo json_encode(['error' => $message]);
    exit;
}

// Member Username
$memberUsername = $_SESSION['memberUsername'];
$memberID = $_SESSION['memberID'];
/*
$dbc = "mysql:host=$host;dbname=$dbname;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dbc, $web_user, $pwd, $opt);
*/

$characterID = isset($_GET['characterID']) ? (int) $_GET['characterID'] : 0;

// Select statements for drop down fields
$sql = "SELECT * FROM characters WHERE characterID = $characterID";

$result = mysqli_query($dbc, $sql);

if (!$result) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}

if (mysqli_num_rows($result) == 0) {
    echo "No rows found, nothing to print so am exiting";
    exit;
}

$character = mysqli_fetch_assoc($result);

// Remove html encoded quotes from values
foreach ($character as &$text) {
    $text = html_entity_decode($text, ENT_QUOTES);
}

echo json_encode($character);

mysqli_close($dbc);
?>