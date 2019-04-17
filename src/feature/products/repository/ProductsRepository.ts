import {inject, injectable} from 'inversify';
import ProductsGatewayInterface from '../gateway/ProductsGatewayInterface';
import ProductsRepositoryInterface from './ProductsRepositoryInterface';
import {Observable} from 'rxjs/index';
import Products from '../entity/Products';
import {map} from 'rxjs/internal/operators';
import productsRawToEntityMapper from '../mapper/productsRawToEntityMapper';
import {PRODUCTS} from '../di';

@injectable()
export default class ProductsRepository implements ProductsRepositoryInterface {
    public gateway: ProductsGatewayInterface;

    constructor(@inject(PRODUCTS.ProductsGatewayInterface) gateway: ProductsGatewayInterface) {
        this.gateway = gateway;
    }

    public fetchProducts(): Observable<Products> {
        return this.gateway.fetchProducts()
            .pipe(
                map(productsRawToEntityMapper),
            );
    }

    public getProducts(): Observable<Products> {
        return this.gateway.getProducts();
    }

    public setProducts(products: Products): void {
        this.gateway.setProducts(products);
    }
}
