import React from 'react'

class App extends React.Component {

    render(){
        return <div></div>
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
         .then(res => res.json())
         .then(console.log)
    }
}

export default App