<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if( empty($_POST['name']) && empty($_POST['mail']) ) die();
if ($_POST){
    // set response code - 200 OK
    http_response_code(200);
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    //data
    $msg = $_POST['message']; 
    $mailTo = "erikjames69@hotmail.com";
    $headers = "De: " . $mailFrom;
    $txt = "Recibiste un correo de ".$name .".\n\n" .$message;      
    
    mail($mailTo, $subject, $txt, $headers);
    //echo json_encode( $_POST );
    echo json_encode(array("sent" => true));
} else { 
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => "Algo pasó mal. Lo sentimos."
     ]
 );
}
?>