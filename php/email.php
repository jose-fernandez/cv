<?php
$list=[$_POST["name"], $_POST["email"], $_POST["phone"], $_POST["msg"]];
	if ($list) {
		$mail = $list[0].' | '.$list[1].' | '.$list[2].' | '.$list[3];
		//Titulo
		$titulo = 'Mensaje desde la web';
		//Enviamos el mensaje a tu_dirección_email 
		$bool = mail('jose@josefer.tk',$titulo,$mail);
		if ($bool){
			echo "1";
		}else{
			echo "2";
		}
	}
?>