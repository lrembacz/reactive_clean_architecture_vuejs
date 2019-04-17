import ApiClientInterface from './ApiClientInterface';
import {Observable} from 'rxjs';
import {AxiosRequestConfig, AxiosResponse, AxiosStatic, CancelTokenSource} from 'axios';
import {injectable} from 'inversify';
import {AxiosSubscriber} from './AxiosSubscriber';
import axios from 'axios';

@injectable()
export default class AxiosClient implements ApiClientInterface {
    protected fetch: AxiosStatic;

    constructor() {
        this.fetch = axios;
    }

    public get<T>(url: string, options?: AxiosRequestConfig | {}): Observable<AxiosResponse<T>> {
        return new Observable<AxiosResponse<T>>( (subscriber) => {
            const source: CancelTokenSource = this.fetch.CancelToken.source();

            const newOptions: AxiosRequestConfig = {
                cancelToken: source.token,
                ...options,
            };

            this.fetch.get<T>(url, newOptions)
                .then( (response) => {
                    subscriber.next(response);
                    subscriber.complete();
                })
                .catch((error) => {
                    subscriber.error(error);
                });

            if (options && options.hasOwnProperty('cancelToken')) {
                return subscriber;
            }

            return new AxiosSubscriber(subscriber, source);
        });
    }
}
