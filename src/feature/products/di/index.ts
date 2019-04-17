import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';
import { PRODUCTS } from './types';
import ProductsViewModelInterface from '../viewModel/ProductsViewModelInterface';
import ProductsViewModel from '../viewModel/ProductsViewModel';
import GetProductsUseCase from '../interactors/GetProductsUseCase';
import ProductsGateway from '../gateway/ProductsGateway';
import ProductsGatewayInterface from '../gateway/ProductsGatewayInterface';
import FetchProductsUseCase from '../interactors/FetchProductsUseCase';
import ProductsRepositoryInterface from '../repository/ProductsRepositoryInterface';
import ProductsRepository from '../repository/ProductsRepository';
import ApiClientInterface from '../../../architecture/apiClient/ApiClientInterface';
import AxiosClient from '../../../architecture/apiClient/AxiosClient';
import StoreClientInterface from '../../../architecture/storeClient/StoreClientInterface';
import VuexStoreClient from '../../../architecture/storeClient/VuexStoreClient';

const container = new Container();

container.bind<ProductsViewModelInterface>(PRODUCTS.ProductsViewModelInterface).to(ProductsViewModel);
container.bind<ProductsGatewayInterface>(PRODUCTS.ProductsGatewayInterface).to(ProductsGateway);
container.bind<ProductsRepositoryInterface>(PRODUCTS.ProductsRepositoryInterface).to(ProductsRepository);

container.bind<FetchProductsUseCase>(PRODUCTS.FetchProductsUseCase).to(FetchProductsUseCase);
container.bind<GetProductsUseCase>(PRODUCTS.GetProductsUseCase).to(GetProductsUseCase);

container.bind<ApiClientInterface>(PRODUCTS.ApiClientInterface).to(AxiosClient);
container.bind<StoreClientInterface>(PRODUCTS.StoreClientInterface).to(VuexStoreClient);

const { lazyInject } = getDecorators(container);

export { container, lazyInject, PRODUCTS};
