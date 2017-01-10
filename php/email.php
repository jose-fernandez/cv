<?php
$mail = $_POST['name'].' | '.$_POST['email'].' | '.$_POST['phone'].' | '.$_POST['message'];

//Titulo
$titulo = 'Mensaje desde la web';
//Enviamos el mensaje a tu_dirección_email 
$bool = mail('jose@josefer.tk',$titulo,$mail);
if($bool){
    echo "Mensaje enviado";
}else{
    echo "Mensaje no enviado";
}
?>