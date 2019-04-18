import {FluxStandardAction} from '../../fsa';
import {Observable} from 'rxjs';

export default interface StoreClientInterface {

    get<T>(property: any): Observable<T | any>;

    dispatch<P>(action: FluxStandardAction<P>): void;
}
