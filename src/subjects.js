import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs'

document.addEventListener('click', () => {
    const stream$ = new ReplaySubject(2) // the same that Subject, but has an initial value

    stream$.next('hi')
    stream$.next('rx')
    stream$.next('js')

    stream$.subscribe(v => console.log('Value: ', v))
})