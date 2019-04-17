import {Observable} from 'rxjs';
import {AxiosResponse} from 'axios';

export default interface ApiClientInterface {
    get<T>(url: string, options?: any): Observable<AxiosResponse<T>>;
}
