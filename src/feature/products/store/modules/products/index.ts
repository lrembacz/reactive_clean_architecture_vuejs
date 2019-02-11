import { Module } from 'vuex';
import Products from '../../../entity/Products';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import {RootState} from '../../../../../store/index';

/**
 * Declare module types
 */
export interface ProductsState {
    products: Products;
}

/**
 * Implement the module
 */
const productsState: ProductsState = {
    products: [],
};

const products: Module<ProductsState, RootState> = {
    namespaced: true,
    state: productsState,
    mutations,
    actions,
    getters,
};

export default products;
