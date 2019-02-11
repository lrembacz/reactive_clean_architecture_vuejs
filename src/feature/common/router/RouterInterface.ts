import ProductInterface from '../../products/entity/ProductInterface';

export default interface RouterInterface {

    openProductDetails(product: ProductInterface): void;
}
