import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [
        MenuComponent,
        FooterComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        FooterComponent,
        HomeComponent,
    ]
})
export class NavegacaoModule{}