import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs'
import { scan, map } from 'rxjs/operators'

// const stream$ = of('hello', 'world'); // let us create streams from any data

// stream$.subscribe(val => {
//     console.log('val: ', val)
// })

// const arr$ =
//     from([1, 2, 3, 4]) // the same that an 'of', but works only with arrays
//         .pipe( // any streams object have .pipe()
//             scan((acc, v) => acc.concat(v), [])
//         )


// arr$.subscribe(val => console.log(val))


// How to create own streams? 


// const stream$ = new Observable(observer => { // The Promise alternative
//     observer.next('First value')

//     setTimeout(() => observer.next('After 1000 ms'), 1000)
//     observer.complete()

//     observer.error('Something went wrong')
// })


// Every time when we have a change in our observable, we will call this callback
// stream$.subscribe(
//     val => console.log('val: ', val), // next
//     err => console.error(err), // errors 
//     () => console.log('finally') // if error it won't be called
// )

// stream$.subscribe({
//     next(value) {
//         console.log(value)
//     }, 
//     error(err) {
//         console.error(err)
//     }, 
//     complete() {
//         console.log('complete')
//     }
// })


// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({ // Processing the event
//             x: e.offsetX, 
//             y: e.offsetY, 
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(pos => { 
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     })

// const clear$ = fromEvent(document.getElementById('clear'), 'click')
//     clear$.subscribe(() => {
//         const canvas = document.querySelector('canvas')
//         canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//     })

// const sub = interval(500)
//     .subscribe(v => console.log(v))

// setTimeout(() => sub.unsubscribe(), 4000)

// timer(2500)
//     .subscribe(v => console.log(v))

range(42, 10).subscribe(v => console.log(v))