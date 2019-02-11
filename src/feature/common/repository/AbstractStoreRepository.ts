import StoreGatewayInterface from '../gateway/StoreGatewayInterface';
import StoreRepositoryInterface from './StoreRepositoryInterface';
import {injectable} from 'inversify';

@injectable()
export default abstract class AbstractStoreRepository implements StoreRepositoryInterface {}
