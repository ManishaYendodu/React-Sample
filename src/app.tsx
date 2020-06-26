console.log('webpack react app');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app-root'));