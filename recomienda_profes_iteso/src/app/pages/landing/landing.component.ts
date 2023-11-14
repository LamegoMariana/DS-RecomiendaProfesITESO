import { Component, OnInit } from '@angular/core';

import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  isAnimation(): void {
    document.querySelectorAll('.card:not(.behind-2)').forEach((card) => {
      const cardScroll = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'center bottom',
          end: 'bottom bottom',
          markers: false,
          toggleActions: 'play play none reverse',
        },
      });
      cardScroll.from(card, { duration: 0.5, translateY: 50, opacity: 0 });
      cardScroll.to(card, { duration: 0.5, translateY: 0, opacity: 1 });
    });

    const specialCard = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector('.behind-2'),
        start: 'center 60%',
        end: 'bottom 50%',
        markers: false,
        toggleActions: 'play play none reverse',
      },
    });
    specialCard.from(document.querySelector('.behind-2'), {
      opacity: 0,
      y: -100,
    });

    const headerSection = document.querySelector('.end-section');
    const headerScroll = gsap.timeline({
      scrollTrigger: {
        trigger: headerSection,
        start: 'center bottom',
        end: 'bottom bottom',
        markers: false,
        toggleActions: 'play play none reverse',
      },
    });
    headerScroll.from(headerSection, { opacity: 0, y: -100 });

    const picturesSection = document.querySelector('.pictures');
    const picturesSectionScroll = gsap.timeline({
      scrollTrigger: {
        trigger: picturesSection,
        start: 'center bottom',
        end: 'bottom bottom',
        markers: false,
        toggleActions: 'play play none reverse',
      },
    });
    picturesSectionScroll.from(picturesSection, {
      opacity: 0,
      x: -50,
      duration: 0.5,
    });
  }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.isAnimation();
  }
}
