// Contoh membuat component react yang berbeda dari file mine.js

var Greeter = React.createClass({
      // bila propsnya belum terdefinisi maka defaultnya adalah ini
      getDefaultProps: function(){
            return{
                  name: 'react',
                  message: 'Ini defaultnya kalo gak ada'
            };
      },
      onButtonClick: function(e){
            e.preventDefault(); // Supaya tidak relaod ke halamannya

            var name = this.refs.name.value; // bila ada ref dari atribut greeeter maka untuk propsnya harus menggunakan 'refs'

            alert(name);
      },
      
      render: function(){
            var name = this.props.name;
            var message = this.props.message;
            return(
                  <div>
                        <h1>Welcome My Home {name}</h1>
                        <p>This is Form a component</p>
                        <h2>{message}</h2>
                        {/* ini adalah even user dan callback 'OnSubmit' */}
                        <form onSubmit={this.onButtonClick}>
                              <input type='text' ref='name' />
                              <button>Set Name</button>
                        </form>
                  </div>
            );
      }
});

var firstname = 'Faza Ganteng' // contoh menginiliatize


ReactDOM.render(
      <Greeter name= {firstname} message='Message from props'/>, // ini adalah propsnya yang diubah
      document.getElementById('app')
);