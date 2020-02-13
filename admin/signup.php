<?php
    $reqtime = date("Y-m-d H:i:s");

    if(isset($_POST['submit'])) {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Login (login = function)
            // returning the value of the login function
            $message = '<p class="echoM">'.login($username, $password, $reqtime).'</p>';
        }else{
            $message = '<p class="echoM">Please fill out the required fields</p>';
        }
    }
?>