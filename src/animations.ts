import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
    transition(':enter', [ // Define when the animation should start
        style({ opacity: 0 }), // Initial state before the animation starts
        animate('300ms ease-in', style({ opacity: 1 })) // Final state after the animation ends
    ])
]);

export const expandOnHoverAnimation =
    trigger(
        'expandOnHover', [
            state('initial', style({ width: '5%' })),
            state('expanded', style({ width: '10%' })),
            transition('* <=> *', animate('300ms ease-in-out')),
    ]);