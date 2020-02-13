export default {
    template: `
    <div>
        <h1 class="hidden">Sign Up</h1>
        <section class="subscription" id="subscription">
            <h2 id="subHead">Log In</h2>
            
            <form action="index.php" method="post">
                <div class="input-wrap">
                    <label for="uname">Username</label>
                    <input type="text" id="uname" name="username" value="">
                </div>
                <div class="input-wrap">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" name="password" value="">
                </div>
                <input name="submit" type="submit" id="submit" value="SUBMIT">
            </form>
        </section>
    </div>
    `
}