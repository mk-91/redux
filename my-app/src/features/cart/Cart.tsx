import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  Item,
  removeItem,
  selectItems,
  selectItemsQuantity,
  selectTotal,
  increaseQuantity,
  decreaseQuantity,
  selectIsDisplayed,
} from './cartSlice';
import './Cart.css';
import { addNotifications } from '../notifications/notificationsSlice';

export function Cart() {
  const quantity: number = useAppSelector(selectItemsQuantity);
  const items: Item[] = useAppSelector(selectItems);
  const total: number = useAppSelector(selectTotal);
  const isDisplayed: boolean = useAppSelector(selectIsDisplayed);

  const dispatch = useAppDispatch();

  const renderRemoveButton = (id: string) => {
    const handleClick = () => {
      dispatch(removeItem(id));
      dispatch(
        addNotifications({
          message: 'Produkt został usunięty z koszyka',
          type: 'warning',
        })
      );
    };
    return (
      <button className='btn btn-light' onClick={handleClick}>
        Remove
      </button>
    );
  };

  const renderIncreaseButton = (id: string) => {
    return (
      <button
        className='btn btn-light'
        onClick={() => {
          dispatch(increaseQuantity(id));
        }}
      >
        +
      </button>
    );
  };

  const renderReduceButton = (id: string) => {
    return (
      <button
        className='btn btn-light'
        onClick={() => {
          dispatch(decreaseQuantity(id));
        }}
      >
        -
      </button>
    );
  };

  return (
    <div
      id='cart'
      className={
        'card position-absolute top-0 end-0 z-index-1 w-25 ' +
        (isDisplayed ? 'd-block' : 'd-none')
      }
    >
      <ul className='list-group list-group-flush'>
        {items.map((item, index) => (
          <li
            key={index}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            {item.name} {item.price} {renderReduceButton(item.id)}(
            {item.quantity}){renderIncreaseButton(item.id)}{' '}
            {renderRemoveButton(item.id)}
          </li>
        ))}
      </ul>

      <div className='card-footer d-flex justify-content-evenly'>
        <span>Total: </span> <strong>{total} PLN</strong>
      </div>
    </div>
  );
}
