<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
*/

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => array(
        'server' => '127.0.0.1', /** Value almost always should localhost or 127.0.0.1, whichever works */
        'user' => 'root',
        'password' => '',
        'database' => 'databaseName',
    ),
    '.com' => array(
        'server' => 'localhost',
        'user' => 'username',
        'password' => 'password',
        'database' => 'databaseName',
    ),
);
