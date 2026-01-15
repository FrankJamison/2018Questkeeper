<?php

// Centralized bootstrap for safe error logging in production.
// Writes fatal errors to a per-app log file so blank HTTP 500s can be diagnosed.

ini_set('log_errors', '1');

$questkeeperErrorLog = realpath(__DIR__ . '/..') . DIRECTORY_SEPARATOR . 'php-error.log';
@ini_set('error_log', $questkeeperErrorLog);

error_reporting(E_ALL);
ini_set('display_errors', '0');

register_shutdown_function(function () use ($questkeeperErrorLog) {
    $lastError = error_get_last();
    if (!$lastError) {
        return;
    }

    // Only log fatal-ish errors
    $fatalTypes = [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR];
    if (isset($lastError['type']) && !in_array($lastError['type'], $fatalTypes, true)) {
        return;
    }

    $uri = $_SERVER['REQUEST_URI'] ?? '';
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $method = $_SERVER['REQUEST_METHOD'] ?? '';

    $summary = sprintf(
        'QuestKeeper fatal: %s in %s:%s (host=%s method=%s uri=%s)',
        $lastError['message'] ?? 'unknown',
        $lastError['file'] ?? 'unknown',
        $lastError['line'] ?? '0',
        $host,
        $method,
        $uri
    );

    @error_log($summary);
});
