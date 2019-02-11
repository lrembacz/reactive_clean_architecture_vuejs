import AbstractAxiosGateway from '../../common/gateway/AbstractAxiosGateway';
import ProductsGatewayInterface from './ProductsGatewayInterface';
import axios, {AxiosStatic} from 'axios';
import {injectable} from 'inversify';

@injectable()
export default class ProductsGateway extends AbstractAxiosGateway implements ProductsGatewayInterface {
    public axios: AxiosStatic;

    constructor() {
        super();
        this.axios = axios;
    }
}
