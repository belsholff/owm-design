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
            ], { optional: true }),
            query(':enter', [ style({ opacity: 0 }) ],  { optional: true }),
            query(':leave', animateChild(),  { optional: true }),
            group([
                query(':leave', [animate('.3s ease-out', style({ opacity: 0 }))],  { optional: true }),
                query(':enter', [animate('.3s ease-out', style({ opacity: 1 }))],  { optional: true })
            ]),
            query(':enter', animateChild(),  { optional: true })
        ]
    )]
);
