import {BehaviorSubject, Observable} from 'rxjs/index';
import Products from '../entity/Products';
import {StoreModule} from '../../../store';

export default class ProductsStore implements StoreModule {
    public products$: Observable<Products>;
    private pProducts: BehaviorSubject<Products>;

    constructor(initialState: Products) {
        this.pProducts = new BehaviorSubject(initialState);
        this.products$ = this.pProducts.asObservable();
    }

    get products(): Observable<Products> {
        return this.pProducts.asObservable();
    }

    public ['SET_PRODUCTS']({products}: any): void {
        console.log(products);
        this.pProducts.next(products);
    }
}
