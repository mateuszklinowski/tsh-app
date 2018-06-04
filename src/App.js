import React, {Component} from 'react';
import './App.css';
import {PaymentsContainer} from "./components/Payments";
import {FiltersContainer} from "./components/Filters";
import {PaginationContainer} from "./components/Pagination";
import {PaymentModalContainer} from "./components/PaymentModal";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="title">Where your money goes</h1>
                    <p className="subtitle">
                        Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.
                    </p>
                    <hr/>
                </header>
                <main className="App-main">
                    <FiltersContainer/>
                    <PaymentsContainer/>
                    <PaginationContainer/>
                    <PaymentModalContainer/>
                </main>
            </div>
        );
    }
}

export default App;
