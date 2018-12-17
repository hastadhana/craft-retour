<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
return [
    'Cached redirect hit for {url}' => 'Cached redirect hit for {url}',
    'Create Entry Redirects' => 'Create Entry Redirects',
    'Trimmed {rows} from retour_stats table' => 'Trimmed {rows} from retour_stats table',
    'Cached redirect saved for {url}' => 'Cached redirect saved for {url}',
    'Controls whether Retour automatically creates static redirects when an entry\'s URI changes.' => 'Controls whether Retour automatically creates static redirects when an entry\'s URI changes.',
    'Dashboard' => 'Dashboard',
    'Should the query string be stripped from all 404 URLs before their evaluation?' => 'Should the query string be stripped from all 404 URLs before their evaluation?',
    'All redirect caches cleared' => 'All redirect caches cleared',
    'Plugin name' => 'Plugin name',
    'Retour' => 'Retour',
    'Should the query string be stripped from the saved statistics source URLs?' => 'Should the query string be stripped from the saved statistics source URLs?',
    'The public-facing name of the plugin' => 'The public-facing name of the plugin',
    'Redirecting {url} to {dest} with status {status}' => 'Redirecting {url} to {dest} with status {status}',
    'Settings' => 'Settings',
    'Strip Query String from Statistics' => 'Strip Query String from Statistics',
    'Redirects' => 'Redirects',
    '{name} plugin loaded' => '{name} plugin loaded',
    'Strip Query String from 404s' => 'Strip Query String from 404s',
    'A 404 exception occurred' => 'A 404 exception occurred',
    'Statistics to Store' => 'Statistics to Store',
    'Retour redirect caches' => 'Retour redirect caches',
    'Error validating statistics {id}: {errors}' => 'Error validating statistics {id}: {errors}',
    'Error validating redirect {id}: {errors}' => 'Error validating redirect {id}: {errors}',
    ' Match' => ' Match',
    'Retour statistics cleared: {error}' => 'Retour statistics cleared: {error}',
    'Exact Match' => 'Exact Match',
    'RegEx Match' => 'RegEx Match',
    'Retour statistics cleared.' => 'Retour statistics cleared.',
    'Legacy URL Pattern' => 'Legacy URL Pattern',
    'Couldn\'t load redirect id {id}' => 'Couldn\'t load redirect id {id}',
    'Redirect Type' => 'Redirect Type',
    '410 - Gone' => '410 - Gone',
    'Match Type' => 'Match Type',
    '301 - Permanent' => '301 - Permanent',
    '302 - Temporary' => '302 - Temporary',
    'Destination URL' => 'Destination URL',
    'Select whether the redirect should be permanent or temporary.' => 'Select whether the redirect should be permanent or temporary.',
    'What type of matching should be done with the Legacy URL Pattern.  Details on RegEx matching can be found at [regexr.com](http://regexr.com/).  If a plugin provides a custom matching function, you can select it here.' => 'What type of matching should be done with the Legacy URL Pattern.  Details on RegEx matching can be found at [regexr.com](http://regexr.com/).  If a plugin provides a custom matching function, you can select it here.',
    'Edit Redirect' => 'Edit Redirect',
    'Redirects imported from CSV file.' => 'Redirects imported from CSV file.',
    'Couldn\'t delete redirect.' => 'Couldn\'t delete redirect.',
    'Redirect settings saved.' => 'Redirect settings saved.',
    'Redirect deleted.' => 'Redirect deleted.',
    'Import CSV File' => 'Import CSV File',
    'How many unique 404 statistics should be stored before they are trimmed.' => 'How many unique 404 statistics should be stored before they are trimmed.',
    'Getting Element URIs: {uris}' => 'Getting Element URIs: {uris}',
    'Incrementing statistics for: {redirect}' => 'Incrementing statistics for: {redirect}',
    'Deleting redirect to prevent a loop: {redirect}' => 'Deleting redirect to prevent a loop: {redirect}',
    'Automatically Trim Statistics' => 'Automatically Trim Statistics',
    'Creating new redirect: {redirect}' => 'Creating new redirect: {redirect}',
    'Whether the Statistics should be trimmed after each new statistic is recorded' => 'Whether the Statistics should be trimmed after each new statistic is recorded',
    'Updating existing redirect: {redirect}' => 'Updating existing redirect: {redirect}',
    'Comparing old: {oldUri} to new: {newUri}' => 'Comparing old: {oldUri} to new: {newUri}',
    'Trimming statistics' => 'Trimming statistics',
    'Manifest file not found at: {manifestPath}' => 'Manifest file not found at: {manifestPath}',
    'Should the anonymous ip address of the client causing a 404 be recorded?' => 'Should the anonymous ip address of the client causing a 404 be recorded?',
    'Module does not exist in the manifest: {moduleName}' => 'Module does not exist in the manifest: {moduleName}',
    'Record Remote IP' => 'Record Remote IP',
    'Legacy URL Match Type' => 'Legacy URL Match Type',
    'Full URL' => 'Full URL',
    'Enter the destination URL that should be redirected to.  This can either be a fully qualified URL or a relative URL.  e.g.: Exact Match: `/new-recipes/` or `http://example.com/new-recipes/`, or RegEx Match: `/new-recipes/$1`' => 'Enter the destination URL that should be redirected to.  This can either be a fully qualified URL or a relative URL.  e.g.: Exact Match: `/new-recipes/` or `http://example.com/new-recipes/`, or RegEx Match: `/new-recipes/$1`',
    'Enter the URL pattern that Retour should match.  This matches against the path only (the part of the URL after the domain name), or the full URL, depending on the setting of **Legacy URL Match Type**.  e.g.: Exact Match: `/recipes/` or `http://example.com/recipes/`, or RegEx Match: `.*RecipeID=(.*)`' => 'Enter the URL pattern that Retour should match.  This matches against the path only (the part of the URL after the domain name), or the full URL, depending on the setting of **Legacy URL Match Type**.  e.g.: Exact Match: `/recipes/` or `http://example.com/recipes/`, or RegEx Match: `.*RecipeID=(.*)`',
    'Path Only' => 'Path Only',
    'Should the legacy URL be matched by path (e.g. `/new-recipes/`) or by full URL (e.g.: `http://example.com/new-recipes/`)?' => 'Should the legacy URL be matched by path (e.g. `/new-recipes/`) or by full URL (e.g.: `http://example.com/new-recipes/`)?',
    'Not handled-> full URL: {fullUrl}, path only: {pathOnly}' => 'Not handled-> full URL: {fullUrl}, path only: {pathOnly}',
    '404 full URL: {fullUrl}, 404 path only: {pathOnly}' => '404 full URL: {fullUrl}, 404 path only: {pathOnly}',
    'Should the query string be preserved and passed along to the redirected URL?' => 'Should the query string be preserved and passed along to the redirected URL?',
    'Preserve Query String' => 'Preserve Query String',
    'Enabled' => 'Enabled',
    'Should this redirect be processed?' => 'Should this redirect be processed?',
    'All Sites' => 'All Sites',
    'Global' => 'Global'
];
