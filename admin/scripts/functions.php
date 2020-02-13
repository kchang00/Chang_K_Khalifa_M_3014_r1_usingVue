<?php
function redirect_to($location){
    echo 'redirect working';
    exit;
    if($location != null){
        header('Location:' .$location);
        // very important to include exit for security (after header - redirect)
        exit;
    }
}