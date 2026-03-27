import { Component, computed, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Rplace');
  protected _date = signal(new Date());
  protected _stringDate : Signal<string> = computed(() =>{
    
    return `${this._date().getFullYear()}
    - ${this._date().getMonth()}
    - ${this._date().getDate()}`
  })
  ngOnInit(){
    console.log(this.title());
  }
  addDay(add: boolean = true){
    this._date.update((oldValue) => {
      let day = add? oldValue.getDate()+1 : oldValue.getDate()-1;
      let month = oldValue.getMonth();
      let year = oldValue.getFullYear();

      return new Date(year, month, day);
    })
  }
}
