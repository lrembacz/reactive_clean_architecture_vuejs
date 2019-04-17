import Products from '../entity/Products';

const productsRawToEntityMapper = (array: any[]): Products => {
        return array.map((data) => {
            return {
                name: data.name,
                price: data.price,
            };
        });
};

export default productsRawToEntityMapper;
