import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';
import { PRODUCTS } from './types';
import ProductsPresenterInterface from '../presenter/ProductsPresenterInterface';
import ProductsPresenter from '../presenter/ProductsPresenter';
import GetProductsUseCase from '../interactors/GetProductsUseCase';
import ProductsStoreRepository from '../repository/ProductsStoreRepository';
import ProductsStoreRepositoryInterface from '../repository/ProductsStoreRepositoryInterface';
import ProductsStoreGateway from '../gateway/ProductsStoreGateway';
import ProductsStoreGatewayInterface from '../gateway/ProductsStoreGatewayInterface';
import ProductsGateway from '../gateway/ProductsGateway';
import ProductsGatewayInterface from '../gateway/ProductsGatewayInterface';
import FetchProductsQueryObjectInterface from '../queryObject/FetchProductsQueryObjectInterface';
import FetchProductsQueryObject from '../queryObject/FetchProductsQueryObject';
import FetchProductsUseCase from '../interactors/FetchProductsUseCase';
import SaveFetchedProductsUseCase from '../interactors/SaveFetchedProductsUseCase';

const container = new Container();

container.bind<ProductsPresenterInterface>(PRODUCTS.ProductsPresenterInterface).to(ProductsPresenter);
container.bind<GetProductsUseCase>(PRODUCTS.GetProductsUseCase).to(GetProductsUseCase);
container.bind<ProductsStoreRepositoryInterface>(PRODUCTS.ProductsStoreRepositoryInterface)
    .to(ProductsStoreRepository);
container.bind<ProductsStoreGatewayInterface>(PRODUCTS.ProductsStoreGatewayInterface).to(ProductsStoreGateway);
container.bind<ProductsGatewayInterface>(PRODUCTS.ProductsGatewayInterface).to(ProductsGateway);
container.bind<FetchProductsQueryObjectInterface>(PRODUCTS.FetchProductsQueryObjectInterface)
    .to(FetchProductsQueryObject);
container.bind<FetchProductsUseCase>(PRODUCTS.FetchProductsUseCase).to(FetchProductsUseCase);
container.bind<SaveFetchedProductsUseCase>(PRODUCTS.SaveFetchedProductsUseCase).to(SaveFetchedProductsUseCase);

const { lazyInject } = getDecorators(container);

export { container, lazyInject, PRODUCTS};
