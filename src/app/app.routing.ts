import { Routes, RouterModule } from "@angular/router";

import { StudentList } from "./studentlist/studentlist.component";

import { StudentDetail } from "./studentdetail/studentdetail.component";

const ROUTES: Routes = [
    { path:'', component:StudentList},
    { path: 'detail', component: StudentDetail },
    { path: 'users', loadChildren: './users/user.module#UserModule'}
];

export const routing = RouterModule.forRoot(ROUTES);