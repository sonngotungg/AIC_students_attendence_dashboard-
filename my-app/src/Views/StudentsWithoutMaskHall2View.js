import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllStudentsTable from '../info_table/all_students_table'
import { Button } from "react-bootstrap";



function StudentsWithoutMaskHall2View() {
    const greeting = 'AllStudentsView';

    let history = useHistory();

    const tableData = {
        columns: [
            {
                label: "ID",
                field: "ID",
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
            ID: 1,
            fullname: 'ngo tung son',
            image: 'data/1.png'
        },
        {
            ID: 2,
            fullname: 'ngo van quyen',
            image: 'data/Heyward-Prize.jpg'
        }
    ]

    return (
        <div>
            <div className="intro">
                <div>
                    <h1>{greeting}</h1>
                </div>
                <div className="back">
                    <hr />
                    <Button variant="primary" onClick={() => history.push("/dashboard")}>
                        Back
                    </Button>
                </div>
            </div>

            <AllStudentsTable data={dataToDisplay} />
            {/* <div className="text-center mt-4">
      <Button variant="success" onClick={handleExport}>
        EXPORT
      </Button>

      <p style={{ color: "#4CAF50" }}>{exportStatus}</p>
    </div> */}
        </div>
    );
}

export default StudentsWithoutMaskHall2View;