<?php
    $reqtime = date("Y-m-d H:i:s");

    if(isset($_POST['submit'])) {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Login (login = function)
            $message = login($username, $password, $reqtime);
        }else{
            $message = '<p class="echoM">Please fill out the required fields</p>';
        }
    }
?>