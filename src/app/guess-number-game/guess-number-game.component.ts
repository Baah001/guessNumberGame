import {Component, OnInit} from '@angular/core';
import {ValidatorService} from '../shared/services/services.service';

@Component({
  selector: 'app-guess-number-game',
  templateUrl: './guess-number-game.component.html',
  styleUrls: ['./guess-number-game.component.css']
})
export class GuessNumberGameComponent implements OnInit {

  validator: ValidatorService;
  secretNumber: number;
  minRange: number;
  maxRange: number;
  selectedNumber: number;
  userGuesses: number[] = [];
  winner: boolean;
  message: string;
  gameOver: boolean = false;

  constructor(validator: ValidatorService) {

    this.validator = validator;
  }

  ngOnInit() {
    this.secretNumber = this.validator.generateMinAndMaxrange();


    let minAndMax = this.validator.getMinAndMaxRange(this.secretNumber);

    for (let i = 0; i < minAndMax.length; i++) {

      this.minRange = minAndMax[0];
      this.maxRange = minAndMax[1];

    }


  }

  onAttempt() {
    const maxAttempts = 3;

    if (this.userGuesses.length < maxAttempts) {
      this.userGuesses.push(this.selectedNumber);
      for (let i = 0; i < this.userGuesses.length; i++) {

        if (this.userGuesses[i] === this.secretNumber) {
          this.winner = true;
          this.message = `Congratulations! You guessed the correct number: ${this.secretNumber}`
        }


      }
    } else if (this.userGuesses.length === 3) {
      this.gameOver = true;
      this.message = `Gameover! The correct number was: ${this.secretNumber}`;
    }


  }

  onRetry() {
    this.secretNumber = this.validator.generateMinAndMaxrange();
    this.winner = null;
    this.userGuesses = [];

    let minAndMax = this.validator.getMinAndMaxRange(this.secretNumber);

    for (let i = 0; i < minAndMax.length; i++) {

      this.minRange = minAndMax[0];
      this.maxRange = minAndMax[1];

    }
    this.message = '';
    this.gameOver = false;
  }
}
