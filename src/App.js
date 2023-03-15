import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Preview from './components/Preview';
import store from './redux/store';

function App() {
  return (
    < >
      <Provider store={store}>
        <Header />
        <section>
          <Input />
          <Preview />
        </section>
      </Provider>
    </>
  );
}

export default App;
