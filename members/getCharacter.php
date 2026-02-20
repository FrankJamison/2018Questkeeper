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

$connectError = null;
try {
    $dbc = @mysqli_connect($host, $web_user, $pwd, $dbname);
} catch (mysqli_sql_exception $e) {
    $dbc = false;
    $connectError = $e->getMessage();
}
if (!$dbc) {
    http_response_code(500);
    $message = 'QuestKeeper error: failed to connect to MySQL. For local dev, set includes/db.local.inc.php; for deployed environments, set includes/db.config.inc.php.';
    $isLocal = isset($_SERVER['HTTP_HOST']) && stripos($_SERVER['HTTP_HOST'], 'localhost') !== false;
    if ($isLocal) {
        $message .= ' MySQL error: ' . ($connectError ?: mysqli_connect_error());
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
    http_response_code(500);
    echo json_encode(['error' => 'Could not successfully run query', 'details' => mysqli_error($dbc)]);
    exit;
}

if (mysqli_num_rows($result) == 0) {
    http_response_code(404);
    echo json_encode(['error' => 'Character not found']);
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