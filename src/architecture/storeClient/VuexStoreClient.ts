import StoreClientInterface from './StoreClientInterface';
import {FluxStandardAction} from '../../fsa';
import {Store} from 'vuex';
import {from, Observable} from 'rxjs';
import {injectable} from 'inversify';
import store from '../../store/vuex';

@injectable()
export default class VuexStoreClient implements StoreClientInterface {
    public store: Store<any>;

    constructor() {
        this.store = store;
    }

    public dispatch<P>(action: FluxStandardAction<P, undefined>): Observable<any> {
        return from(this.store.dispatch(action.type, action.payload));
    }

    public get<T>(property: any): Observable<T> {
        return new Observable<T>((subscriber) => {
            this.store.watch((state) => this.fromState(property, state),
                (val: T) => {
                    if (val) {
                        subscriber.next(val);
                    }
                },
                {
                    immediate: true,
                },
            );
        });
    }

    private fromState<T>(property: any, state?: any): T {
        if (typeof property === 'function') {
            return property(state);
        }
        return (state as any)[property];
    }

}
