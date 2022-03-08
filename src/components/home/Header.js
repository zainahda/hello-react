import React, { Component } from "react";
import "./header.css";

const judul = {
  color: "orange",
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  display: "flex",
  justifyContent: "center",
  fontSize: "45px",
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daftar: "Daftar Makanan Nusantara",
      listDaftar: this.props.list,
      statusRendering: true,
    };
    this.textPesan = this.textPesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  textPesan(value, e) {
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  componentDidMount() {
    console.log("Jalan : componentDidMount");
  }

  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering };
    });
  }

  render() {
    console.log("jalan : render");
    console.log(this.state.statusRendering);
    return (
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1
              style={{
                color: "white",
                backgroundColor: "orange",
                fontSize: "50px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              Selamat Datang
            </h1>
            <h2 style={judul}>Silahkan Memilih Makanan</h2>
          </div>
        ) : (
          <div>
            <h1 id="judulKedua">Selamat Tinggal</h1>
            <h2 className="subJudul">Jangan Lupa Datang Kembali</h2>
          </div>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    );
    // let { daftar, listDaftar } = this.state
    // return (
    //   <div>
    //     <h2>Makanan Khas Indonesia</h2>
    //     <p>{daftar}</p>
    //     <p>{listDaftar}</p>
    //     <a href="/" onClick={(e) => this.textPesan("Pesan Dari Header", e)}> Halaman Header</a>
    //   </div>
    // )
  }
}

export default Header;
