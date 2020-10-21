import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllTeachersTable from '../info_table/all_teachers_table'
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";



function AllTeachersView(props) {
    const greeting = 'AllTeachersView';

    let history = useHistory();

    const tableData = {
        columns: [
            {
                label: "TeacherID",
                field: "teacherID",
                sort: "asc",
                width: 150,
            },
            {
                label: "Fullname",
                field: "fullname",
                sort: "asc",
                width: 270,
            },
            {
                label: "Image",
                field: "image",
                sort: "asc",
                width: 1000,
            }
        ],
        rows: [],
    };

    const [data, setData] = useState({
        // initial data
    });

    const dataToDisplay = [
        {
            teacherID: 1,
            fullname: 'ngo tung son',
            image: 'data/1.png'
        },
        {
            teacherID: 2,
            fullname: 'ngo van quyen',
            image: 'data/Heyward-Prize.jpg'
        }
    ]

    // console.log(props)
    return (
        <div>
            <div className="intro">
                <div>
                    <h1>{props.location.state.title}</h1>
                </div>
                <div className="back">
                    <hr />
                    <Button variant="primary" onClick={() => history.push("/dashboard")}>
                        Back
                    </Button>
                </div>
            </div>

            <AllTeachersTable data={dataToDisplay} />
            {/* <div className="text-center mt-4">
      <Button variant="success" onClick={handleExport}>
        EXPORT
      </Button>

      <p style={{ color: "#4CAF50" }}>{exportStatus}</p>
    </div> */}
        </div>
    );
}

export default AllTeachersView;