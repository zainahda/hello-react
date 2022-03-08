import React, { Component } from "react";
import menuMakanan from './lib/Food';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
    };
    this.ubahData = this.ubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // ubahData() {
  //   this.setState({title: "Menu Utama"});
  // }

  ubahData() {
    this.setState((state, props) => {
      return {
        title: state.title2,
        title2: state.title,
      };
    });
  }

  handleChange(value, e) {
    this.setState({ [value]: e.target.value });
  }

  render() {
    const { title, title2, inputValue, inputKota} = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <h2>{title2}</h2>
        <button onClick={this.ubahData}>Rubah Data</button>
        <br />
        <br />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => this.handleChange("inputValue", e)}
          placeholder="nama"
        />
        <input
          type="text"
          value={inputKota}
          placeholder="kota"
          onChange={(e) => this.handleChange("inputKota", e)}
        />

        {menuMakanan.map((value, index) => {
          return (
            <div key={index}>

              <p>{index +1}. {value.nama}</p>
              <p>Harga : {value.harga} /Porsi</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
