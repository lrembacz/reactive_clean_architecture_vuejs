import ViewInterface from '../../common/view/ViewInterface';
import Products from '../entity/Products';

export default interface ProductsViewInterface extends ViewInterface {

    displayProducts(products: Products): void;
}
