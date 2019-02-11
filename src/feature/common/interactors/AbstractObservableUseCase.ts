import InteractorInterface from './InteractorInterface';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {injectable} from 'inversify';

@injectable()
export default abstract class AbstractObservableUseCase<T, P = {}> implements InteractorInterface<T> {
    protected subscription: Subscription;

    public abstract createObservable(): Observable<T>;

    public execute(subscriber: Subscriber<T>, params?: P): void {
        this.subscription = this.createObservable()
            .subscribe(subscriber);
    }

    public getObservable(): Observable<T> {
        return this.createObservable();
    }

    public unsubscribe() {
        if (!this.subscription.closed) {
            this.subscription.unsubscribe();
        }
    }

}
