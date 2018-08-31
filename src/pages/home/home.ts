import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    todos: string[] = [];
    todo: string = "";
    status:boolean;
    id:string;
    completed:string[] = [];
 
    constructor(public navCtrl: NavController) {
 
    }
 
    add() {
        if(this.todo != ""){
            this.todos.push(this.todo);
            this.todo = "";
            this.status = false;
        }
    }
 
    delete(item) {
        let index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
    deletecomplete(item){
        let index = this.completed.indexOf(item, 0);
        if (index > -1) {
            this.completed.splice(index, 1);
        }
    }
    edit(item){
        let index:int = this.todos.indexOf(item,0);
        if(index > -1){
            this.todo=item;
            this.id=index;
            this.status = true;
        }
    }
    update(){
        if(this.todo != ""){
            this.todos[this.id]=this.todo;
            this.todo= "";
            this.id= "";
            this.status = false;
        }
    }
    cancel(){
        if(this.todo != ""){
            this.todo= "";
            this.id= "";
            this.status = false;
        }
    }
    statuscomplete(item){
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
            this.completed.push(item);
        }
    }
    statuscancel(item){
        let index = this.completed.indexOf(item,0);
        if (index > -1){
            this.completed.splice(index,1);
            this.todos.push(item);
        }
    }

        
}