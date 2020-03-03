import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Bootstrap
import {NgbPopoverModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
//Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
//Custom Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NavContentComponent } from './layout/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './layout/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './layout/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './layout/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NavLeftComponent } from './layout/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './layout/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './layout/nav-bar/nav-right/nav-right.component';
import {ChatUserListComponent} from './layout/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import {FriendComponent} from './layout/nav-bar/nav-right/chat-user-list/friend/friend.component';
import {ChatMsgComponent} from './layout/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ConfigurationComponent } from './layout/configuration/configuration.component';
import { NavigationItem } from './layout/navigation/navigation';
//Custom Pages
import {  AuthSigninComponent} from './pages/auth-signin/auth-signin.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewUserComponent } from './pages/users/view-user/view-user.component';
import { AddManufacturerComponent } from './pages/manufacturers/add-manufacturer/add-manufacturer.component';
import { ViewManufacturerComponent } from './pages/manufacturers/view-manufacturer/view-manufacturer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ChatUserListComponent,
    FriendComponent,
    ChatMsgComponent,
    ConfigurationComponent,

    //Components
    AuthSigninComponent,
    DashboardComponent,
    AddUserComponent,
    ViewUserComponent,
    AddManufacturerComponent,
    ViewManufacturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    NgbProgressbarModule,
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
