import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import './info_table.css';

class AllStudentsTable extends React.Component {
    render() {
        
        let data = [].concat(this.props.data);

        data = data.map((row) => {
            row.ImgPath = row.image;
            return row;
        });
        // return <h1>hello</h1>
        return (
           
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "StudentID",
                            accessor: "studentID",
                        },
                    
                        {
                            Header: "Fullname",
                            accessor: "fullname",
                        },

                        {
                            Header: "Image",
                            Cell: (row) => {
                                return (
                                    <div>
                                        <img id='avatar' src={row.original.ImgPath} alt="avatar.jpg" />
                                    </div>
                                );
                            },
                            
                        },
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
               )
    }
}

export default AllStudentsTable;
