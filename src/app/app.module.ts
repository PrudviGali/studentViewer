import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppHeader } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppFooter } from "./footer/footer.component";
import {StudentList} from "./studentlist/studentlist.component";
import { StudentDetail } from "./studentdetail/studentdetail.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [HomeComponent, StudentDetail,AppHeader,AppFooter,StudentList],
    imports: [BrowserModule, routing],
    bootstrap: [HomeComponent]
})
export class AppModule {

}