import AbstractObservableUseCase from '../../common/interactors/AbstractObservableUseCase';
import Products from '../entity/Products';
import {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';
import {PRODUCTS} from '../di';
import {inject, injectable} from 'inversify';
import FetchProductsQueryObjectInterface from '../queryObject/FetchProductsQueryObjectInterface';

@injectable()
export default class FetchProductsUseCase extends AbstractObservableUseCase<AxiosResponse<Products>> {
    public fetchProductsQueryObject: FetchProductsQueryObjectInterface;

    constructor(
        @inject(PRODUCTS.FetchProductsQueryObjectInterface) fetchProductsQueryObject: FetchProductsQueryObjectInterface,
    ) {
        super();
        this.fetchProductsQueryObject = fetchProductsQueryObject;
    }

    public createObservable(): Observable<AxiosResponse<Products>> {
        return this.fetchProductsQueryObject.execute();
    }

}
