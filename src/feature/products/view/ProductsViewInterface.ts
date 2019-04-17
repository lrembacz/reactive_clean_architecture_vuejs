import ViewInterface from '../../../core/presentation/view/ViewInterface';
import Products from '../entity/Products';

export default interface ProductsViewInterface extends ViewInterface {
    products: Products;
}
