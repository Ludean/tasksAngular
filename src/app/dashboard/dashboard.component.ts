import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activo:any;
  usuarios:any=['Usuario 1','Usuario 2'];
  userId!:number;
  title!: string;
  description!: string;
  editTitle!: string;
  editDescription!: string;
  status!:string;
  dataTask:any;
  constructor(private _apiTaskService: TaskServiceService) {
    this.status="pendiente";
    this.userId=1;
  }
  ngOnInit(){
    this._apiTaskService.getData().subscribe(res=>{
      
      this.dataTask= res;

    })
  }
  onChange(value: any) {
    this.userId=value.target.value;
  }
  newTask() {
    let data ={
      "userId": this.userId,
      "title": this.title,
      "description": this.description,
      "status": this.status
    };
    this._apiTaskService.postData(data).subscribe(res=>{
        console.log(res);
        location.reload();
    })
    this.limpiar();
  }
  editTaskTitle(id:any, value:any){
    let data ={
      "title": value.target.value
    };
    this._apiTaskService.updateData(id,data).subscribe(res=>{
      console.log(res);
      location.reload();
    })
  }
  editTaskDescrip(id:any, value:any){
    let data ={
      "description": value.target.value
    };
    this._apiTaskService.updateData(id,data).subscribe(res=>{
      console.log(res);
      location.reload();
    })
  }
  updateTask(id:any){
    console.log(id);
    let data ={
      "status": "completada"
    };
    this._apiTaskService.updateData(id,data).subscribe(res=>{
      console.log(res);
      location.reload();
    })
  }
  deleteTask(id:any){

    console.log(id);
    let data ={
      "status": "papelera"
    };
    this._apiTaskService.updateData(id,data).subscribe(res=>{
      console.log(res);
      location.reload();
    })
    
  }
  limpiar(){
    this.title='';
    this.description='';
    this.status='';
  }
}
