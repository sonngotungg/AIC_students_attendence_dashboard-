import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
// import moment from "moment";
import "./hf_dashboard.css";

function Dashboard(props) {
  // use for demo

  // let initialData = {
  //   all_students: Math.floor((Math.random() * 200) + 100),
  //   student_in_school: Math.floor((Math.random() * 200) + 100),
  //   student_not_in_school: initialData.all_students - initialData.student_in_school,
  //   student_late: Math.floor((Math.random() * 30) + 1),
  //   all_teachers: Math.floor((Math.random() * 15) + 10),
  //   teacher_in_school: Math.floor((Math.random() * 15) + 12),
  //   teacher_not_in_school: initialData.all_teachers - initialData.teacher_not_in_school,
  //   teacher_late: Math.floor((Math.random() * 3) + 1),
  //   total_abnormal_temperature_HT1: Math.floor((Math.random() * 4) + 0),
  //   students_without_mask_HT1: Math.floor((Math.random() * 10) + 0),
  //   total_abnormal_temperature_HT2: Math.floor((Math.random() * 4) + 0),
  //   students_without_mask_HT2: Math.floor((Math.random() * 10) + 0),
  // };
  const [dashboardReport, setDashboardReport] = useState({
    // initial data
    ...props.data,
  });



  // const [currentDateAndTime, setCurrentDateAndTime] = useState(cu)

  let history = useHistory();

  // Student Views
  function view_all_students() {
    history.push({ pathname: "/allStudents", state: { title: 'Tổng Số Sinh Viên' } });
  }

  function view_student_in_school() {
    history.push({ pathname: "/studentInSchool", state: { title: 'Tổng Số Học Sinh Đi Học' } });
  }

  function view_student_late() {
    history.push({ pathname: "/studentNotInSchool", state: { title: 'Tổng Số Học Sinh Vắng' } });
  }

  function view_student_not_in_school() {
    history.push({ pathname: "/studentLate", state: { title: 'Tổng Số Học Sinh Đi Muộn' } });
  }

  // Teacher Views
  function view_all_teachers() {
    history.push({ pathname: "/allTeachers", state: { title: 'Tổng Số Giáo Viên' } });
  }

  function view_teacher_in_school() {
    history.push({ pathname: "/teacherInSchool", state: { title: 'Tổng Số Giáo Viên Đi Làm' } });
  }

  function view_teacher_not_in_school() {
    history.push({ pathname: "/teacherNotInSchool", state: { title: 'Tổng Số Giáo Viên Vắng' } });
  }

  function view_teacher_late() {
    history.push({ pathname: "/teacherLate", state: { title: 'Tổng Số Giảng Viên Đi Muộn' } });
  }

  function view_total_abnormal_temp_hall1() {
    history.push({ pathname: "/totalAbnormalTempHall1", state: { title: 'tổng Số Thân Nhiệt Bất Thường HT 1' } });
  }

  function view_total_abnormal_temp_hall2() {
    history.push({ pathname: "/totalAbnormalTempHall2", state: { title: 'tổng Số Thân Nhiệt Bất Thường HT 2' } });
  }

  function view_students_without_mask_hall1() {
    history.push({ pathname: "/studentsWithoutMaskHall1", state: { title: 'Tổng Số Học Sinh Không Đeo Khẩu Trang HT 1' } });
  }

  function view_students_without_mask_hall2() {
    history.push({ pathname: "/studentsWithoutMaskHall2", state: { title: 'Tổng Số Học Sinh Không Đeo Khẩu Trang HT 2' } });
  }
  // console.log('testing:')
  // console.log(props.data)
  useEffect(() => {
    console.log('testing#2:')
    console.log(props.data)
    setDashboardReport(props.data)
  }, [props.data]) // This will only run when one of those variables change

  // const intervalRef = useRef(null);

  return (
    <>
      <div className='header'>
        {/* <img src='/static/thpt_lehongphong_hcm.png' alt='logo' /> */}
        <h1>THPT {props.data.school_name} DASHBOARD</h1>
      </div>
      <div className="dashboard-report">
        <div className='thermalAndMaskCheck'>
          <div id="hall1">
            <div className="title"><h4>Sảnh 1</h4></div>
            <div id="temp_icon">Nhiệt Độ Bất Thường</div>
            <div id="abnormal_temp" onClick={view_total_abnormal_temp_hall1}><p>{dashboardReport.total_abnormal_temperature_HT1}</p></div>
            <div id="mask_icon">Không Đeo Mặt Nạ</div>
            <div id="mask_info" onClick={view_students_without_mask_hall1}><p>{dashboardReport.students_without_mask_HT1}</p></div>
          </div>
          <div id="hall2" >
            <div className="title"><h4>Sảnh 2</h4></div>
            <div id="temp_icon">Nhiệt Độ Bất Thường</div>
            <div id="abnormal_temp" onClick={view_total_abnormal_temp_hall2}><p>{dashboardReport.total_abnormal_temperature_HT2}</p></div>
            <div id="mask_icon">Không Đeo Mặt Nạ</div>
            <div id="mask_info" onClick={view_students_without_mask_hall2}><p>{dashboardReport.students_without_mask_HT2}</p></div>
          </div>
        </div>
        <div className='studentInfo'>
          <div id="all-students" onClick={view_all_students}>
            <img src='/static/student_icon.png' alt='student' />
            <h3>{dashboardReport.all_students}</h3>
          </div>
          <div className='attendance'>
            <div id="student-in-school" onClick={view_student_in_school}>
              <h3>Học Sinh Đi Học</h3>
              <p>{dashboardReport.student_in_school}</p>
            </div>
            <div id="student-not-in-school" onClick={view_student_not_in_school}>
              <h3>Học Sinh Vắng Mặt</h3>
              <p>{dashboardReport.student_not_in_school}</p>
            </div>
          </div>

          <div id="student-late" onClick={view_student_late}>
            <p>{dashboardReport.student_late}</p>
            <h3>Học Sinh Đi Muộn</h3>
          </div>
        </div>
        <div className='teacherInfo'>
          <div id="all-teachers" onClick={view_all_teachers}>
            <img src='/static/teacher_icon.png' alt='teacher' />
            <h3>{dashboardReport.all_teachers}</h3>

          </div>
          <div className='attendance'>
            <div id="teacher-in-school" onClick={view_teacher_in_school}>
              <h3>Giáo Viên Đi Làm</h3>
              <p>{dashboardReport.teacher_in_school}</p>
            </div>
            <div id="teacher-not-in-school" onClick={view_teacher_not_in_school}>
              <h3>Giáo Viên Vắng</h3>
              <p>{dashboardReport.teacher_not_in_school}</p>
            </div>
          </div>

          <div id="teacher-late" onClick={view_teacher_late}>
            <p>{dashboardReport.teacher_late}</p>
            <h3>Giáo Viên Đi Muộn</h3>

          </div>
        </div>
      </div >
    </>
  );
}

export default Dashboard;
