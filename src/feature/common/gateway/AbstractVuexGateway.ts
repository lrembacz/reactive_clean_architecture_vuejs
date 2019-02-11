import StoreGatewayInterface from './StoreGatewayInterface';
import {FluxStandardAction} from '../../../fsa';
import {Store} from 'vuex';
import {Observable} from 'rxjs';
import {injectable} from 'inversify';

@injectable()
export default abstract class AbstractVuexGateway implements StoreGatewayInterface {
    public abstract store: Store<any>;

    public state<T>(property: any): T {
        return this.fromState(property, this.store.state);
    }

    public dispatch<P>(action: FluxStandardAction<P, undefined>): Promise<any> {
        return this.store.dispatch(action.type, action.payload);
    }

    public stateAsObservable<T>(property: any): Observable<T> {
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
