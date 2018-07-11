import React, {Component} from 'react';

class headerWrapper extends Component{
    render() {
        return(
            <div className='header-wrapper'>
                <h1>Welcome to HOA manager</h1>
                <p> please log in to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default headerWrapper;