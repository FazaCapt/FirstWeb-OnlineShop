import React, { Component } from 'react'; // Import ini syarat dasar untuk membuat component
import Child from './Child';

class Mine extends Component { // Membuat class component
    render() {
        return (
            <div>
                <div id="mine">Halo Faza Cakep banget</div>
                <div>Orang paling keren</div>
                <Child />
                <br />
                <Child />
                <br />
                <Child />
            </div> // Didalam return hanya ada satu div. Cara mengakalinnya seperti ini
           
        ) // Bila Component lebih dari satu baris harus menggunakan Dalam kurung
    }
}

export default Mine; // Harus menggunakan default class

// **** dan kembali ke index.js untuk mengimport component.