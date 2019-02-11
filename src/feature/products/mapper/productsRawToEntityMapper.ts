import ProductInterface from '../entity/ProductInterface';
import Products from '../entity/Products';
import { AxiosResponse } from 'axios';

const productsRawToEntityMapper = (value: AxiosResponse<ProductInterface[]>): Products => {
        return value.data.map((product: ProductInterface) => {
            return {
                name: product.name,
                price: product.price,
            };
        });
};

export default productsRawToEntityMapper;
