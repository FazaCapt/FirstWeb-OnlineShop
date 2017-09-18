var Greeter = React.createClass({
      render: function(){
            return(
                  <div>
                        <h1>Welcome My Home Faza</h1>
                        <p>This is Form a component</p>
                  </div>
            );
      }
});



ReactDOM.render(
      <Greeter />,
      document.getElementById('app')
);