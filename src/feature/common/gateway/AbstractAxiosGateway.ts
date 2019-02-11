import GatewayInterface from './GatewayInterface';
import {Observable} from 'rxjs';
import {AxiosRequestConfig, AxiosResponse, AxiosStatic} from 'axios';
import {injectable} from 'inversify';

@injectable()
export default abstract class AbstractAxiosGateway implements GatewayInterface {
    protected axios: AxiosStatic;

    public get<T>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
        return new Observable<AxiosResponse<T>>( (subscriber) => {
            this.axios.get<T>(url, options)
                .then( (response) => {
                    subscriber.next(response);
                    subscriber.complete();
                })
                .catch((error) => {
                    subscriber.error(error);
                });
        });
    }

}
