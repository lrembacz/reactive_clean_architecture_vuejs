import { Subscriber } from 'rxjs';
import {CancelTokenSource } from 'axios';

export class AxiosSubscriber<T> extends Subscriber<T> {
    private source: CancelTokenSource;
    constructor(observer: Subscriber<T>, source: CancelTokenSource) {
        super(observer);

        this.source = source;
    }

    public unsubscribe() {
        this.source.cancel();
        super.unsubscribe();
    }
}
