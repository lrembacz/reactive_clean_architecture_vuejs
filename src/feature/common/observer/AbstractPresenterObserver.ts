import {Subscriber} from 'rxjs';
import ViewInterface from '../view/ViewInterface';

export default abstract class  AbstractPresenterObserver<T, V extends ViewInterface> extends Subscriber<T> {
    protected view: V;

    public bind(view: V) {
        this.view = view;
        return this;
    }

    public abstract next(value?: T): void;

    public abstract complete(): void;

    public abstract error(error?: any): void;

}
