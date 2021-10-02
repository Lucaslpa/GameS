import { Routes } from './routes';
import { ProductsContextProvider } from './Contexts/Products';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Routes />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
