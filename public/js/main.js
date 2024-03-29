// (()=> {


// })();

// 2. import components we can request and render
import LogInComponent from "./modules/LogInComponent.js";
import DashboardComponent from "./modules/DashboardComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";

// 3. like Express Routes -> router.get ('/', ...) and do something with the request
//    create routes inside
//    order of paths is important! - Vue tries to match the routes to components from the top down
//    the wildcard must be last
const routes = [
    { path: '/', name: 'login', component: LogInComponent },
    { path: '/dashboard', name: 'dashboard', component: DashboardComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

// 4. Catch the route and render the component into router-view in index.html
const router = new VueRouter({
    routes // shorthand for routes: routes
})

// 1. create the vue module
const vm = new Vue({
    data: {
        burger: {
            isExpanded: false
        },
    },

    methods: {
        expandBurger() {
            //console.log('expanded');
            this.burger.isExpanded = (this.burger.isExpanded) ? false : true;
        }
    },

    router
}).$mount("#app");

const echoM = document.querySelector(".echoM");

if(echoM === null) {
    console.log('sign up ready');
} else {
    echoM.classList.add("flip-out-hor-top");
}
