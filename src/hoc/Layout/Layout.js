import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                
                <main>
                    {/* Контент */}
                    {this.props.children}
                </main>
                


            </div>
        )
    }
}

export default Layout