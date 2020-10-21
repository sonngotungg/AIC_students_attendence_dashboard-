import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './App.css';

import DashboardLQD from "./Dashboard/LeQuyDon/DashboardLQD";
import DashboardLHP from "./Dashboard/LeHongPhong/DashboardLHP";
import DashboardND from "./Dashboard/NguyenDu/DashboardND";
import DashboardNH from "./Dashboard/NguyenHien/DashboardNH";
import DashboardTDN from "./Dashboard/TranDaiNghia/DashboardTDN";

import AllStudentsView from './Views/AllStudentsView';
import AllTeachersView from './Views/AllTeachersView';

function App() {
  return (
    <div className="App" >
      <Router>
        <div className="menu">
          <ul className="metismenu-container">
            <li className="metismenu-item">
              <div className="metismenu-link">
                <a href="/">
                  <img src="/static/logo.jpg" alt="AIC" />
                </a>
              </div>
            </li>
            <li className="metismenu-item">
              <div className="metismenu-link">
                <i className="metismenu-icon fa fa-cloud-download "></i>
                <Link to="/lehongphong">
                  THPT Lê Hồng Phong
                </Link>
              </div>
            </li>
            <li className="metismenu-item">
              <div className="metismenu-link">
                <i className="metismenu-icon fa fa-cloud-download "></i>
                <Link to="/lequydon">
                  THPT Lê Quý Đôn
                  </Link>
              </div>
            </li>
            <li className="metismenu-item">
              <div className="metismenu-link">
                <i className="metismenu-icon fa fa-cloud-download "></i>
                <Link to="/nguyenhien">
                  THPT Nguyễn Hiền
                  </Link>
              </div>
            </li>
            <li className="metismenu-item">
              <div className="metismenu-link">
                <i className="metismenu-icon fa fa-cloud-download "></i>
                <Link to="/nguyendu">
                  THPT Nguyễn Du
                  </Link>
              </div>
            </li>
            <li className="metismenu-item">
              <div className="metismenu-link">
                <i className="metismenu-icon fa fa-cloud-download "></i>
                <Link to="/trandainghia">
                  THPT Trần Đại Nghĩa
                  </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="body">
          <Switch>
            <Route
              path='/allStudents'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/studentInSchool'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/studentNotInSchool'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/studentLate'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/allTeachers'
              render={props => <AllTeachersView {...props} isAuthed={true} />}
            />
            <Route
              path='/teacherInSchool'
              render={props => <AllTeachersView {...props} isAuthed={true} />}
            />
            <Route
              path='/teacherNotInSchool'
              render={props => <AllTeachersView {...props} isAuthed={true} />}
            />
            <Route
              path='/teacherLate'
              render={props => <AllTeachersView {...props} isAuthed={true} />}
            />
            <Route
              path='/studentsWithoutMaskHall1'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/studentsWithoutMaskHall2'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/totalAbnormalTempHall1'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route
              path='/totalAbnormalTempHall2'
              render={props => <AllStudentsView {...props} isAuthed={true} />}
            />
            <Route path="/lequydon">
              <DashboardLQD />
            </Route>
            <Route path="/lehongphong">
              <DashboardLHP />
            </Route>
            <Route path="/nguyendu">
              <DashboardND />
            </Route>
            <Route path="/nguyenhien">
              <DashboardNH />
            </Route>
            <Route path="/trandainghia">
              <DashboardTDN />
            </Route>
            <Route path='/'>
              <DashboardLHP />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
