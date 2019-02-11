import GatewayInterface from '../gateway/GatewayInterface';
import {Observable} from 'rxjs/index';

export default interface QueryObjectInterface {
    gateway: GatewayInterface;

    execute<T>(params?: any): Observable<any>;
}
