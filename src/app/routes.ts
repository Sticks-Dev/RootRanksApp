import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Content } from "./content/content";

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Root Ranks Homepage'
    },
    {
        path: 'content/:id',
        component: Content,
        title: 'Server Ranks'
    }
]

export default routeConfig;