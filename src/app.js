import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Basket from './components/basket';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const [listBasket, setListBasket] = useState([]);
  const [openBasket, setOpenBasket] = useState(false);
  const [countProduct, setCountProduct] = useState(0);

  const checkOpenBasket = () => {
    setOpenBasket(!openBasket)
  }

  const onAddToBasket = (product) => {
    // const isInArray = false;
    console.log(listBasket);
    
      const empty = true
      if (listBasket.length) {
        !empty
      }
      if (empty) {
        setListBasket([...listBasket, {product, count: 0}])
      }

      else if (!empty) {
        listBasket.forEach(el=> {
          if (el.title !== product.title) {
            setListBasket([...listBasket, {product, count: 1}])
          }
      }  )
      console.log(product.title);
      
  
    if (!isInArray) {
      // setListBasket([...listBasket, {product, countProduct: 1}])
    }
      }
  }

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItemToBasket(code);
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      {/* <Controls onAdd={callbacks.onAddItem}/> */}
      <Basket onAddToBasket={onAddToBasket} listBasket={listBasket}/>
      <List list={list}
            onDeleteItem={callbacks.onDeleteItem}
            onSelectItem={callbacks.onSelectItem}
            onAddToBasket={onAddToBasket}
            />
      {/* <List 

      /> */}
    </PageLayout>
  );
}

export default App;
