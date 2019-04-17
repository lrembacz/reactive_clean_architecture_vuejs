import ProductInterface from '../../feature/products/entity/ProductInterface';

export default interface RouterInterface {

    openProductDetails(product: ProductInterface): void;
}
