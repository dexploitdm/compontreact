import React, {Component} from 'react'
import './Layout.css' 
import '../../containers/Quiz/Quiz.css'

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                
                <main>
                    {/* Контент */}
                    {this.props.children}
                </main>
                


            </div>
        )
    }
}

export default Layout