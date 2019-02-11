import {FluxStandardAction} from '../../../fsa';
import {Observable} from 'rxjs';

export default interface StoreGatewayInterface {

    dispatch<P>(action: FluxStandardAction<P>): void;

    state<T>(property: any): T;

    stateAsObservable<T>(property: any): Observable<T>;
}
