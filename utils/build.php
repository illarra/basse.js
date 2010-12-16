#!/usr/bin/env php
<?php
/**
 * PHP Build
 *
 * Combine and minify the source files.
 */

$files = explode("\n", file_get_contents("FILES.txt"));
$out   = array();

foreach ($files as $file) {
  $out[] = file_get_contents("../src/" . $file) . "\n";
}

file_put_contents("../build/basse-debug.js", implode("\n", $out));
exec('java -jar yuicompressor-2.4.2.jar ../build/basse-debug.js -o ../build/basse-min.js');