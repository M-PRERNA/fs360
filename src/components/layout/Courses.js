import React, { Component } from 'react'
import styles from './styles'
import { Footer } from '../view'

class Courses extends Component {
    componentDidMount(){
        window.scrollTo(0 ,0)
    }

	render(){
		const style = styles.home

		return ( 
			<div className="clearfix">
                <section className="notopmargin">
                    <div className="container clearfix">
                        <div className="col_two_third">


                        </div>

                        <div className="col_one_third col_last topmargin-lg">


                        </div>

                    </div>
                </section>

                <Footer />
			</div>
		)
	}
}

export default Courses
