//feature 1
import React from "react";
import Products from "./components/Products";
import data from './data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
  return (
    <div className="grid-container">
      <header> <a href = "/"> Mithra Shoping Cart</a> </header>
      <main> 
        <div className="content">
          <div className="main">
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
     </main>
      <footer> Developed By RekaNatarajan Mca. ! </footer>
    </div>
  );

}
}

export default App;
