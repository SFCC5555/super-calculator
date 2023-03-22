import React from 'react'
import '../styles/Button.css'

function Button({ name, functionality, type, color }) {

    return (<button onClick={()=>functionality(name)} className={type} style={{backgroundColor:color}}>{name}</button>)
}


/*class Button extends React.Component{

    constructor (props) {
        super(props)
    }

    render() {

        const name = this.props.name;
        const functionality = this.props.functionality;
        const type = this.props.type;
        const color = this.props.color;


        return (<button onClick={()=>functionality(name)} className={type} style={{backgroundColor:color}}>{name}</button>)
    }

}*/

    

Button.defaultProps = {type:'normalButton',color:'darkgrey'}

export { Button }