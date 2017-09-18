// ******* Parent Component

import React, { Component } from 'react'; // Import ini syarat dasar untuk membuat component
import Child from './Child';
import ChildProps from './ChildProps';


class Mine extends Component { // Membuat class component
    constructor(){
        super()
        this.state = {texts:[], color:'', counter: 0} //Menambahkan state color supaya berubah warna
        this.changeColor = this.changeColor.bind(this); // Kalo kita membuat function custom maka secara default thisnya null, maka harus dibuat seperti ini.
        this.counterClick = this.counterClick.bind(this);
    }

    componentDidMount() {
        this.setState({texts:['Belajar ReactJS', 'Belajar NodeJS', 'Belajar ExpressJS'], color: 'green'}); // Membuat state default
    }

    changeColor(){
        if(this.state.color === 'green'){
            this.setState({color: 'blue'})
        } else {
            this.setState({color:'green'})
        }
    }

    counterClick(){
        this.setState({counter: this.state.counter + 1}) // ini harus sama dengan state counter yang sudah di tentukan
    }

    render() {
        
        let texts = this.state.texts.map(function(text){
            return (
                <ChildProps text= {text} counterClick= {this.counterClick} />
            )
        }, this) // harus di tambahakan this, karena tanpa this ini akan bernilai null (Solusi pertama bila thisnya null), Kalo solisi kedua dengan menggunakan arrow function [pada text di map] (arrow => {})

        let style = {color: this.state.color} //menambahkan state color

        return (
            <div style = {style} onClick={this.changeColor}>
                <div id="mine">Welcome in My Website</div>
                <div>Assalamualaikum</div>
                <br />
                {texts}
                <br />
                {/* Cara menggunakan Props harus diisi textnya sesuai propsnya */}
                <ChildProps text="Ini dibuat dengan PROPS, Supaya lebih dinamis" />
                <ChildProps text="Ini dibuat dengan PROPS 2, Supaya lebih dinamis" />
                <ChildProps text="Ini dibuat dengan PROPS 3, Supaya lebih dinamis" />
                <br />
                {this.state.counter}
            
            </div> // Didalam return hanya ada satu div. Cara mengakalinnya seperti ini
           
        ) // Bila Component lebih dari satu baris harus menggunakan Dalam kurung
    }
}

export default Mine; // Harus menggunakan default class

// **** dan kembali ke index.js untuk mengimport component.