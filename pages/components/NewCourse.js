import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Base from './Base';

export class NewCourse extends Component {
    render() {
        return (
            <React.Fragment>

                <Base></Base>
                <div class="col-md-4 col card mx-auto">
                    <div class="card-header text-center text-primary">
                        <strong>ADD NEW COURSE</strong>
                    </div>
                    <div class="card-body p-3">
                        <form action="" method="post" class="p-3">

                            <label for="course_code">Course Code</label>
                            <input type="text" class="form-control mb-3" name="course_code" id="course_code" required />
                            <label for="course_code">Course Name</label>
                            <input type="text" class="form-control mb-3" name="course_name" id="course_name" required />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default NewCourse
