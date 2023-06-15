
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ElseIfModule } from './else-if/else-if.module';
import { ForLoopModule } from './for-loop/for-loop.module';
import { HeaderModule } from './header/header.module';
import { IfElseModule } from './if-else/if-else.module';
import { ModuleModule } from './module/module.module';
import { NestedLoopModule } from './nested-loop/nested-loop.module';
import { PropertyBindingModule } from './property-binding/property-binding.module';
import { StyleBindingModule } from './style-binding/style-binding.module';
import { SwitchCaseModule } from './switch-case/switch-case.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { ToggleElementModule } from './toggle-element/toggle-element.module';
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
    StyleBindingModule,
    HeaderModule,
    ToggleElementModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    TodoListModule,
    ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
