import React from 'react';

const Top = () => {

  const message = (value, e) => {
    e.preventDefault();
    alert("Halaman Top Tampil");
    alert(value);
  }

  return (
    <div>
      <a href="/" onClick={(e) => message("Test memasukan value", e)}> Halaman Top</a>
    </div>
  )
}

export default Top;
