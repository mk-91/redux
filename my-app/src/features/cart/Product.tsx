import { useAppDispatch } from '../../app/hooks';
import { addNotifications } from '../notifications/notificationsSlice';
import { ProductModel } from '../product/productsSlice';
import { addItem, Item } from './cartSlice';
import './Product.css';

export interface ProductProps {
  product: ProductModel;
}

export function Product(props: ProductProps) {
  const dispatch = useAppDispatch();
  const { product } = props;

  const item: Item = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
  };

  const handleClick = () => {
    dispatch(addItem(item));
    dispatch(
      addNotifications({
        message: `Produkt ${item.name} został dodany do koszyka`,
        type: 'success',
      })
    );
  };

  return (
    <div className='card'>
      <div className='d-flex justify-content-center align-items-center product-image-wrapper'>
        <img className='product-image' src={product.image} alt={product.name} />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>

        <div className='card-footer d-flex justify-content-between align-items-center'>
          <strong className='fs-4'>{product.price} PLN</strong>
          <button className='btn btn-primary' onClick={handleClick}>
            Add product
          </button>
        </div>
      </div>
    </div>
  );
}
