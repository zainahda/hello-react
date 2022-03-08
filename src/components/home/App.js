import React, { Component } from 'react';
import Top from './Top';
// import Form from './component/Form';
import Header from './Header';
// import List from './component/List';
// import Main from './component/Main';
import Footer from './Footer';
import CustomInput from './CustomInput';


class App extends Component {
  render() {
    return (
      <div>
        <Header list="Bintang 5 Menurut Michelin Star"/>
        <Top />
        <CustomInput />
        {/* <Form />
        <Main />
        <List /> */}
        <Footer name="Makanan Nusantara"/>
    </div>
    )
  }
}

export default App;
