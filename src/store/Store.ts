import {BehaviorSubject, Observable} from 'rxjs/index';

export interface StoreModule {
    [index: string]: any;
}

interface StoreType {
    [index: string]: StoreModule;
}

class Store<T> {
    public state$: Observable<T>;
    private sState$: BehaviorSubject<T>;

    public constructor(initialState: T) {
        this.sState$ = new BehaviorSubject(initialState);
        this.state$ = this.sState$.asObservable();
    }

    get state(): T {
        return this.sState$.getValue();
    }

    public setState(nextState: T): void {
        this.sState$.next(nextState);
    }

    public dispatch<R>(action: string, payload: any): Observable<R> {
        const isNamespaced: number = action.indexOf('/');
        if (isNamespaced !== -1) {
            const values: string[] = action.split('/');
            const namespace: string = values[0];
            const actionToCall = values[1];
            return this.state[namespace][actionToCall](payload);
        } else {
            return this.state[action](payload);
        }
    }

}

export default Store;
