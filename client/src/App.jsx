import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';
import store from './app/store';
import AppRoutes from './routes/AppRoutes.jsx';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";

function App() {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </PrimeReactProvider>
    </Provider>
  );
}

export default App;
