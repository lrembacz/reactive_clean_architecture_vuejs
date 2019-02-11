<template>
    <div>
        Lista
        <div>
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
    import ProductsPresenterInterface from '../presenter/ProductsPresenterInterface';

    @Component
    export default class ProductsView extends Vue implements ProductsViewInterface {
        public products: Products = [];
        public loading: boolean = false;

        @lazyInject(PRODUCTS.ProductsPresenterInterface)
        public presenter: ProductsPresenterInterface;

        public created() {
            this.presenter.bind(this);
        }

        public mounted() {
            this.presenter.onInit();
        }

        public displayError(message: string): void {
            console.log('error', message);
        }

        public displayProducts(products: Products) {
            this.products = products;
        }

        public displayLoading(): void {
            this.loading = true;
        }

        public hideLoading(): void {
            this.loading = false;
        }

        public beforeDestroy() {
            this.presenter.onDestroy();
        }

    }
</script>

<style scoped>

</style>