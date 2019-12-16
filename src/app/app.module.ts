import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { RegisterModule } from './register/register.module';
import { RouterModule, Route } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { FundingComponent } from './funding/funding.component';
import { CreatedProjectsComponent } from './created-projects/created-projects.component';

const routes: Route[] = [
  {
    path: 'projects', component: ProjectsComponent,

  },
  {
    path: '', redirectTo: 'projects', pathMatch: 'full'
  },
  {
    path: 'fundings', component: FundingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProjectsComponent,
    FundingComponent,
    CreatedProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
