<?php
    require_once './includes/config/database.php';
    require_once './includes/admin/scripts/login.php';
    require_once './includes/admin/signup.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="public/images/favicon.ico">
    <link rel="stylesheet" href="https://use.typekit.net/fzo1xgx.css">
    <link rel="stylesheet" href="public/css/reset.css">
    <link rel="stylesheet" href="public/css/main.css">
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="https://kit.fontawesome.com/cfa5b23a00.js" crossorigin="anonymous"></script>
    <title>Roku | Login</title>
</head>
<body>
    <main id="app">
        <router-view></router-view>
    </main>
    <script src="public/js/main.js" type="module"></script>
</body>
</html>