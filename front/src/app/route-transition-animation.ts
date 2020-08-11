import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

export const routeTransitionAnimation = trigger(
    'fadeAnnimationTrigger',
     [ transition(
        '* <=> *',
        [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [ style({ opacity: 0 }) ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [animate('.3s ease-out', style({ opacity: 0 }))]),
                query(':enter', [animate('.3s ease-out', style({ opacity: 1 }))])
            ]),
            query(':enter', animateChild())
        ]
    )]
);
