import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  Item,
  removeItem,
  selectItems,
  selectItemsQuantity,
} from './cartSlice';
import './Cart.css';

export function Cart() {
  const quantity: number = useAppSelector(selectItemsQuantity);
  const items: Item[] = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  const renderRemoveButton = (id: string) => {
    return (
      <button
        onClick={() => {
          dispatch(removeItem(id));
        }}
      >
        Remove
      </button>
    );
  };

  return (
    <div id='cart' className='cart'>
      Koszyk: {quantity}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} {item.price} ({item.quantity})
            {renderRemoveButton(item.id)}
          </li>
        ))}
      </ul>
    </div>
  );
}
