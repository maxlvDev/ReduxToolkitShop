import  {Homepage}  from './pages/Homepage/Homepage'
import  {Productpage}  from './pages/Productpage/Productpage'
import { Header } from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from "./configStore"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={ <Homepage /> } />
     <Route path="/app/:name" element={ <Productpage /> }/>
     </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
