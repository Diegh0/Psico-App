import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meditacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meditacion.component.html',
  styleUrl: './meditacion.component.scss'
})
export class MeditacionComponent {
  minutesInput: number = 0;
  secondsInput: number = 0;
  displayMinutes: string = '00';
  displaySeconds: string = '00';
  alarmSound: HTMLAudioElement = new Audio();
  timer:any;
  startTimer() {
    const totalSeconds: number = this.minutesInput * 60 + this.secondsInput;

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }

    let minutes: number = Math.floor(totalSeconds / 60);
    let seconds: number = totalSeconds % 60;

    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          this.alarmSound.play();
          return;
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      this.displayMinutes = this.formatTime(minutes);
      this.displaySeconds = this.formatTime(seconds);
    }, 1000);

    this.alarmSound.src = '../../../assets/audios/alarmaMeditacion.mp3'; // Set the path to your audio file
    this.alarmSound.loop = true;
  }
  stopAlarm() {
    clearInterval(this.timer);
    this.alarmSound.pause();
    this.displayMinutes = '00';
    this.displaySeconds = '00';
  }


  formatTime(time: number): string {
    return time < 10 ? "0" + time : time.toString();
  }
}
