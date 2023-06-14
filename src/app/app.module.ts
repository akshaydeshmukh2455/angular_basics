
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ElseIfModule } from './else-if/else-if.module';
import { ForLoopModule } from './for-loop/for-loop.module';
import { IfElseModule } from './if-else/if-else.module';
import { NestedLoopModule } from './nested-loop/nested-loop.module';
import { PropertyBindingModule } from './property-binding/property-binding.module';
import { StyleBindingModule } from './style-binding/style-binding.module';
import { SwitchCaseModule } from './switch-case/switch-case.module';
import { UserAuthModule } from './user-auth/user-auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    PropertyBindingModule,
    IfElseModule,
    ElseIfModule,
    SwitchCaseModule,
    ForLoopModule,
    NestedLoopModule,
    StyleBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
