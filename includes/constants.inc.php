<?php
ob_start();

// Site constants
// Compute the application's base URL path in a way that works from any subpage
// (e.g. /members/index.php) and in both root-domain and subfolder deployments.
$docRoot = isset($_SERVER['DOCUMENT_ROOT']) ? rtrim(str_replace('\\', '/', $_SERVER['DOCUMENT_ROOT']), '/') : '';
$appFsRoot = rtrim(str_replace('\\', '/', realpath(__DIR__ . '/..') ?: ''), '/');

$ROOT = '';
if ($docRoot !== '' && $appFsRoot !== '' && strncmp($appFsRoot, $docRoot, strlen($docRoot)) === 0) {
    $ROOT = substr($appFsRoot, strlen($docRoot));
    $ROOT = '/' . ltrim($ROOT, '/');
    $ROOT = rtrim($ROOT, '/');
    if ($ROOT === '/') {
        $ROOT = '';
    }
} else {
    // Fallback: derive from the URL path, then strip known subpaths.
    $scriptName = $_SERVER['SCRIPT_NAME'] ?? '';
    $scriptDir = rtrim(str_replace('\\', '/', dirname($scriptName)), '/');
    $ROOT = $scriptDir;
    if (preg_match('#^(.*?)/members$#', $ROOT, $m)) {
        $ROOT = $m[1];
    }
    if ($ROOT === '/') {
        $ROOT = '';
    }
}
ob_end_flush();
?>