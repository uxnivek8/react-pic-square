import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='navbar-header'>
                    <div className='navbar-title'>
                        Hello World!
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
