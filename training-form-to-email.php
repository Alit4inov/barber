<?php 
if($_POST)
{
    $to = "info@retrobarbershop.kh.ua";
    $name = $_POST['tr-name'];
    $tel = $_POST['tr-tel'];

    $message ="Имя:  " . $name . "<br />\n" .
              "Телефон:  " . $tel .  "<br />" ;

    $subject = "Заявка на обучение";

    $headers .= "Content-type: text/html; charset=\"utf-8\"";
    $mail_sent = mail($to, $subject, $message , $headers);
    if ($mail_sent){
        echo  "Спасибо за заявку, " . $name . "!  Мы с вами свяжемся в ближайшее время." ;
    }
}
?>