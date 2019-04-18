import productsStore from '../feature/products/store';
import ProductsStore from '../feature/products/store/ProductsStore';
import Store from './Store';

interface RootStore {
    products: ProductsStore;
}

const store = new Store<RootStore>({
    products: productsStore,
});

export default store;
