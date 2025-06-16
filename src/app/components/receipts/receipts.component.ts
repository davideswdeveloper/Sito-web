import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(Flip, Draggable, InertiaPlugin);
gsap.registerPlugin(SplitText,ScrollTrigger);



@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent  implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.set("h1", { opacity: 1 });

      let split = SplitText.create("#heading", { type: "chars" });
      //now animate each character into place from 20px below, fading in:
      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05
      });
          this.setupGsap();

    }

  }


    setupGsap(): void {
      console.log('setupGsap called');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=400', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    tl.from('.box', {
      backgroundColor: '#28a92b',
      rotation: 360,
      scale: 0,
    });
  }

}
