import ProductsViewInterface from '../view/ProductsViewInterface';
import PresenterInterface from '../../common/presenter/PresenterInterface';
import ProductInterface from '../entity/ProductInterface';

export default interface ProductsPresenterInterface extends PresenterInterface<ProductsViewInterface> {

    onRefresh(): void;

    onProductSelected(product: ProductInterface): void;

    onInit(): void;

    onDestroy(): void;
}
