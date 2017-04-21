import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guess-number-overview',
  templateUrl: './guess-number-game-overview.component.html'
})
export class GuessNumberGameOverviewComponent implements OnInit{
  @Input() attempt: number;
  @Input() myIndex: number;
  @Input() secretNumber: number;
  constructor(){

  }

  ngOnInit(){


  }

  getMyClass(){
    if(this.attempt !== this.secretNumber && (this.myIndex + 1) === 1){
      return 'panel-primary';
    }

    if(this.attempt !== this.secretNumber && (this.myIndex + 1) === 2){
      return 'panel-warning';
    }

    if(this.attempt !== this.secretNumber && (this.myIndex + 1) === 3){
      return 'panel-danger';
    }

    if(this.attempt === this.secretNumber){
      return 'panel-success';
    }

  }
}





