import {Subscriber} from 'rxjs';

export default abstract class  AbstractObserver<T> extends Subscriber<T> {

    public abstract next(value?: T): void;

    public abstract complete(): void;

    public abstract error(error?: any): void;

}
