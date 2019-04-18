import StoreClientInterface from './StoreClientInterface';
import {injectable} from 'inversify';
import {Observable} from 'rxjs/index';
import {FluxStandardAction} from '../../fsa';
import store from '../../store';

@injectable()
export default class RxStoreClient implements StoreClientInterface {
    public store: any;

    constructor() {
        this.store = store;
    }

    public get<T>(property: any): Observable<T> {
        return this.fromState(property, this.store.state);
    }

    public dispatch<P>(action: FluxStandardAction<P>): void {
        return this.store.dispatch(`${action.type}`, action.payload);
    }

    private fromState<T>(property: any, state?: any): T {
        if (typeof property === 'function') {
            return property(state);
        }
        return (state as any)[property];
    }
}
