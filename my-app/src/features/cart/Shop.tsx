import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectItemsQuantity, Item, addItem } from './cartSlice';

// tworzę komponent Shop
export function Shop() {
  const dispatch = useAppDispatch(); //akcja
  const quantity = useAppSelector(selectItemsQuantity); // selektor - wyciągam ze stanu informację o ilości produktów w koszyku;

  const product: Item = {
    id: '1',
    name: 'Call od Duty',
    price: 150,
  };

  // * Zadanie 1: Utwórz komponent Cart, który wyświetli informacje o statnie koszyka
  // * Zadanie 2: Utwórz komponent Produkt który z opcja dodania do koszyka
  // ** Zadanie 3: Wyświetl w koszyku dostępne produktu
  // *** Zadanie 4: Dodaj stylowanie i ikonkę koszyka

  return (
    <div>
      <div id='cart' className='cart'>
        {quantity}
      </div>
      <div className='product'>
        <button
          onClick={() => {
            dispatch(addItem(product));
          }}
        >
          Add product
        </button>
      </div>
    </div>
  );
}
