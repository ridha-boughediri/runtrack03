<?php
try {
    $dbh = new PDO('mysql:host=localhost;dbname=runtrack3_jour5', "root", "");
    foreach($dbh->query('SELECT * from utilisateurs') as $row) {
        print_r($row);
        var_dump($row);
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>