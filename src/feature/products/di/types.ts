import ApiClientInterface from '../../../architecture/apiClient/ApiClientInterface';
import StoreClientInterface from '../../../architecture/storeClient/StoreClientInterface';

const PRODUCTS = {
    ProductsViewModelInterface: Symbol('ProductsViewModelInterface'),
    GetProductsUseCase: Symbol('GetProductsUseCase'),
    ProductsRepositoryInterface: Symbol('ProductsRepositoryInterface'),
    ProductsGatewayInterface: Symbol('ProductsGatewayInterface'),
    FetchProductsUseCase: Symbol('FetchProductsUseCase'),

    // SHARED
    ApiClientInterface: Symbol('ApiClientInterface'),
    StoreClientInterface: Symbol('StoreClientInterface'),
};

export { PRODUCTS };
