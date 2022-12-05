import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { searchProducts } from './productsSlice';

export function ProductsSearch() {
  // const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   dispatch(searchProducts({ query }));
  // };

  return (
    <form
      className='d-flex'
      role='search'
      // onSubmit={handleSubmit}
    >
      <input
        className='form-control me-2'
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}

        onKeyUp={(e: any) =>
          dispatch(searchProducts({ query: e.target.value }))
        }
        type='search'
        placeholder='Search'
        aria-label='Search'
      />
      {/* <button className='btn btn-success' type='submit'>
        Search
      </button> */}
    </form>
  );
}
