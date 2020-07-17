import { interval, fromEvent } from 'rxjs'
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators'

fromEvent(document, 'click')
    .pipe(
        switchMap(event => interval(1000)
            .pipe(
                take(5),
                reduce((acc, value) => acc + value, 0)
            )
        )
    )
    .subscribe({
        next: v => console.log('next: ', v),
        complete: () => console.log('complete')
    })

// const stream$ = interval(1000)
//     .pipe(
//         // tap(value => console.log('Tap: ', value)), 
//         // map(value => value * 3), 
//         // filter(value => value % 2 === 0), 
//         take(4), 
//         // takeLast(5), 
//         // takeWhile(v => v < 8)
//         // scan((acc, value) => acc + value, 0)
//         reduce((acc, value) => acc + value, 0)
//     )

// stream$.subscribe({
//     next: v => console.log('next: ', v), 
//     complete: () => console.log('complete')
// })