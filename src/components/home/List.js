import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <ol>
        <Image
          linkfoto="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
          lebar="600"
          keterangan="Makanan"
        />
        <li>Nasi Padang</li>
        <Image
          linkfoto="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
          lebar="500"
          keterangan="Nasi Padang"
        />
        <li>Sate</li>
        <Image
          linkfoto="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          lebar="400"
          keterangan="Sate"
        />
        <li>Soto Lamongan</li>
        <Image linkfoto="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" 
        lebar="300"
        keterangan="Soto Lamongan"
        />
        
      </ol>
    );
  }
}

export default List;
