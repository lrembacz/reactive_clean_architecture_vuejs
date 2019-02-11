import Vue from 'vue';
import Vuex, {Store, StoreOptions} from 'vuex';
import products from '../feature/products/store/modules/products';

Vue.use(Vuex);

export interface RootState {
    name: string;
}

const storeOptions: StoreOptions<RootState> = {
    state: {
        name: 'app',
    },
    modules: {
        products,
    },
};

const store = new Store<any>(storeOptions);

export default store;
