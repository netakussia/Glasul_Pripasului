<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Colectează datele din formular
    $nume = $_POST['nume'];
    $recenzie = $_POST['recenzie'];

    // Adresa ta de email
    $to = "nicolaiplesca62@gmail"; 

    // Subiectul emailului
    $subject = "Recenzie nouă de la $nume";

    // Corpul emailului
    $message = "Ai primit o recenzie nouă:\n\n";
    $message .= "Nume: $nume\n";
    $message .= "Recenzie: \n$recenzie\n";

    // Header-ul emailului
    $headers = "From: noreply@siteulmeu.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Trimite emailul
    if (mail($to, $subject, $message, $headers)) {
        echo "Recenzia a fost trimisă cu succes!";
    } else {
        echo "A apărut o eroare la trimiterea recenziei.";
    }
}
?>
