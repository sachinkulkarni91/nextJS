import React, { Component } from 'react'

export class Course extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        fetch("https://f083759496f7.ngrok.io/api/v1/certificate/getAllCourses")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                    console.log(result)
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <React.Fragment>
                <div class="row my-2">
                    <h1>Courses : </h1>
                </div>
                <div class="row">

                    <a class="col col-md-4 text-dark p-0" href="">
                        <div class="card m-1 p-5 bg-light">
                            <h2></h2>
                            <hr />
                            <h6></h6>
                        </div>
                    </a>

                </div>

            </React.Fragment>
        )
    }
}

export default Course
