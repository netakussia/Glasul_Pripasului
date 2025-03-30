<?php
// Calea către fișierul care va stoca numărul de vizite
$file = 'counter.txt';

// Verificăm dacă fișierul există
if (file_exists($file)) {
    // Citim numărul de vizite din fișier
    $count = (int)file_get_contents($file);
} else {
    // Dacă fișierul nu există, îl creăm și setăm numărul de vizite la 0
    $count = 0;
}

// Incrementăm numărul de vizite
$count++;

// Salvăm noul număr de vizite în fișier
file_put_contents($file, $count);

// Afișăm numărul total de vizite pe site
echo "<p>Numărul total de vizite: $count</p>";
?>
