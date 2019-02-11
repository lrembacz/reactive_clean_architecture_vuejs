import StoreGatewayInterface from '../../common/gateway/StoreGatewayInterface';
import {Store} from 'vuex';

export default interface ProductsStoreGatewayInterface extends StoreGatewayInterface {
    store: Store<any>;
}
