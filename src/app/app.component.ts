import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subscription, interval, map } from 'rxjs';

interface user {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
  time!: number;
  timeSubscription!: Subscription;

  @ViewChild('h1', { static: false }) h1!: ElementRef;

  constructor(private ref: ChangeDetectorRef) {
    console.log(this.ref);
    this.ref.detach();
  }
  ngOnInit(): void {
    // interval(10)
    //   .pipe(map((time) => time * 10))
    //   .subscribe((time) => {
    //     this.time = time;
    //     if (this.time % 1000 === 0) {
    //       this.ref.detectChanges();
    //     }
    //   });
  }

  ngDoCheck(): void {
    //console.log(this.time);
  }
}
