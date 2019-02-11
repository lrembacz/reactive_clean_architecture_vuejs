<template>
    <div>
        Lista
        <div>
            <button v-stream:click="refresh$">Refresh</button>
            <p v-if="loading">Loading...</p>
            <p v-for="product in products">
                {{ product.name }} | {{ product.price}}
            </p>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ProductsViewInterface from './ProductsViewInterface';
    import Products from '../entity/Products';
    import {lazyInject, PRODUCTS} from '../di';
    import ProductsViewModelInterface from '../ViewModel/ProductsViewModelInterface';
    import {Subject} from 'rxjs/index';

    @Component<ProductsView>({
        subscriptions() {
            this.refresh$ = new Subject<{}>();

            return {
                loading: this.viewModel.loading$(),
                products: this.viewModel.products$(),
                error: this.viewModel.error$(),
            };
        },
    })
    export default class ProductsView extends Vue implements ProductsViewInterface {
        public loading: boolean;
        public products: Products;
        public error: string;
        public refresh$: Subject<{}>;

        @lazyInject(PRODUCTS.ProductsViewModelInterface)
        public viewModel: ProductsViewModelInterface;

        public created() {
            this.viewModel.onInit();

            this.$subscribeTo(this.refresh$, (event) => {
                this.viewModel.onRefresh();
            });
        }

        public beforeDestroy() {
            this.viewModel.dispose();
        }
    }
</script>

<style scoped>

</style>