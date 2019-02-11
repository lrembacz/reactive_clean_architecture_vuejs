import {DefineActions} from 'vuex-type-helper';
import {ProductsState} from './index';
import {MutationTypes, ProductsMutations} from './mutations';
import Products from '../../../entity/Products';
import {FluxStandardAction} from '../../../../../fsa';

export enum ActionTypes {
    'SET_PRODUCTS' = 'SET_PRODUCTS',
}

export interface SetProductsActionPayload {
    products: Products;
}

export interface ProductsActions {
    [ActionTypes.SET_PRODUCTS]: SetProductsActionPayload;
}

const actions: DefineActions<ProductsActions, ProductsState, ProductsMutations, {}> = {
    [ActionTypes.SET_PRODUCTS]({commit}, {products}) {
        commit(MutationTypes.SET_PRODUCTS, { products });
    },
};

export class SetProducts implements FluxStandardAction<SetProductsActionPayload, {}> {
    public type: string = 'products/' + ActionTypes.SET_PRODUCTS;
    public payload: SetProductsActionPayload;

    constructor(private products: Products) {
        this.payload = {
            products: [...products],
        };
    }
}

export default actions;
