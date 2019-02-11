import {DefineMutations} from 'vuex-type-helper';
import {ProductsState} from './index';
import Products from '../../../entity/Products';

export enum MutationTypes {
    'SET_PRODUCTS' = 'SET_PRODUCTS',
}

export interface SetProductsMutationPayload {
    products: Products;
}

export interface ProductsMutations {
    [MutationTypes.SET_PRODUCTS]: SetProductsMutationPayload;
}

const mutations: DefineMutations<ProductsMutations, ProductsState> = {
    [MutationTypes.SET_PRODUCTS](state, {products}) {
        state.products = [...products];
    },
};

export default mutations;
