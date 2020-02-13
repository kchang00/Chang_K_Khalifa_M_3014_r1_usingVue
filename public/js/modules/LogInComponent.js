export default {
    template: `
    <div>
        <h1 class="hidden">Sign Up</h1>
        <section class="subscription" id="subscription">
            <h2 id="subHead">Subscribe To Travel Tips & Deals</h2>
            
            <form action="./index.php" method="post">
                <div class="input-wrap">
                    <label for="uname">Username</label>
                    <input type="text" id="uname" name="username" value="" required>
                </div>
                <div class="input-wrap">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" name="password" value="" required>
                </div>
                <input name="submit" type="submit" id="submit" value="SUBMIT">
            </form>
        </section>
    </div>
    `,

    data: function() {
        return {
            p1: `Ontario is the second largest province in Canada, covering an area of more than one million
            square kilometers; it's bigger than the countries of Spain and France combined! From the wild
            and craggy beauty of the northern Canadian Shield to the lakes and forests of cottage country;
            from the rolling hills of the Ontario farm belt to the scenic wonders of the Niagara Escarpment
            - Ontario rivals any place on earth for diversity and natural wonders.`,
            p2: `Home to more than 13.5 million people, the province is a multicultural mosaic whose citizens
            hail from all corners of the globe. Although English and French are Ontario's official
            languages, there are over 100 other different dialects and languages also spoken.
            Ontario's food scene is just one of the major beneficiaries of multiculturalism, offering residents
            and visitors to the province an almost unlimited choice of international cuisines served at
            restaurants.`,
            p3: `Another bonus to the province is the countless festivals, fairs, parades, and exhibitions taking
            place throughout the year that celebrate many of the different cultures represented here, such
            as the Toronto Caribbean Carnival, Jambana One World Festival in Brampton, Italfest and
            MuslimFest in Mississauga, Oktoberfest in Kitchener-Waterloo, and the Orillia Highland
            Games, to name just a few.`
        }
    }

}