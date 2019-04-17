import {Observable, Subscriber} from 'rxjs';

export default interface InteractorInterface<T> {

    execute(subscriber: Subscriber<T>): void;

    getObservable(): Observable<T>;
}
