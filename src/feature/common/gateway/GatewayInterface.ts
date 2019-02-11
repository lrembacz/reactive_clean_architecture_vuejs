import {Observable} from 'rxjs';

export default interface GatewayInterface {

    get<T>(url: string, options?: any): Observable<any>;

}
