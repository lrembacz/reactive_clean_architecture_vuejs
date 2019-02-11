import ViewModelInterface from '../../common/viewModel/ViewModelInterface';
import {BehaviorSubject, Observable} from 'rxjs/index';
import Products from '../entity/Products';

export default interface ProductsViewModelInterface extends ViewModelInterface {
    products: BehaviorSubject<Products>;
    products$(): Observable<Products>;
    setProducts(products: Products): void;
    onRefresh(): void;
    dispose(): void;
}
