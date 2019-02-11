import AbstractVuexGateway from '../../common/gateway/AbstractVuexGateway';
import ProductsStoreGatewayInterface from './ProductsStoreGatewayInterface';
import store from '../../../store';
import {Store} from 'vuex';
import {injectable} from 'inversify';

@injectable()
export default class ProductsStoreGateway extends AbstractVuexGateway implements ProductsStoreGatewayInterface {
    public store: Store<any>;

    constructor() {
        super();
        this.store = store;
    }
}
