import React, { Component } from 'react'; // Import ini syarat dasar untuk membuat component
import Child from './Child';
import ChildProps from './ChildProps';


class Mine extends Component { // Membuat class component
    render() {
        return (
            <div>
                <div id="mine">Welcome in My Website</div>
                <div>Assalamualaikum</div>
                <br />
                <Child />                
                <Child />            
                <Child />
                <br />
                {/* Cara menggunakan Props harus diisi textnya sesuai propsnya */}
                <ChildProps text="Ini dibuat dengan PROPS, Supaya lebih dinamis" />
                <ChildProps text="Ini dibuat dengan PROPS 2, Supaya lebih dinamis" />
                <ChildProps text="Ini dibuat dengan PROPS 3, Supaya lebih dinamis" />
            </div> // Didalam return hanya ada satu div. Cara mengakalinnya seperti ini
           
        ) // Bila Component lebih dari satu baris harus menggunakan Dalam kurung
    }
}

export default Mine; // Harus menggunakan default class

// **** dan kembali ke index.js untuk mengimport component.