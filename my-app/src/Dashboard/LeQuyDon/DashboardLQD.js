import React, { useState, useEffect } from 'react';
import Dashboard from "../../hf_dashboard/hf_dashboard";

function DashboardLQD() {
    // use for demo

    let LQD_data1 = {
        school_name: 'LÊ QUÝ ĐÔN',
        all_students: 100,
        student_in_school: 90,
        student_not_in_school: 10,
        student_late: 80,
        all_teachers: 20,
        teacher_in_school: 15,
        teacher_not_in_school: 5,
        teacher_late: 1,
        total_abnormal_temperature_HT1: 1,
        students_without_mask_HT1: 6,
        total_abnormal_temperature_HT2: 1,
        students_without_mask_HT2: 2,
    };

    let LQD_data2 = {
        school_name: 'LÊ QUÝ ĐÔN',
        all_students: 100,
        student_in_school: 80,
        student_not_in_school: 20,
        student_late: 10,
        all_teachers: 20,
        teacher_in_school: 16,
        teacher_not_in_school: 4,
        teacher_late: 1,
        total_abnormal_temperature_HT1: 0,
        students_without_mask_HT1: 1,
        total_abnormal_temperature_HT2: 1,
        students_without_mask_HT2: 3,
    };

    let LQD_data3 = {
        school_name: 'LÊ QUÝ ĐÔN',
        all_students: 100,
        student_in_school: 90,
        student_not_in_school: 10,
        student_late: 80,
        all_teachers: 20,
        teacher_in_school: 15,
        teacher_not_in_school: 5,
        teacher_late: 1,
        total_abnormal_temperature_HT1: 1,
        students_without_mask_HT1: 6,
        total_abnormal_temperature_HT2: 1,
        students_without_mask_HT2: 2,
    };

    let arr = [LQD_data2, LQD_data2, LQD_data3, LQD_data2, LQD_data1, LQD_data2, LQD_data1, LQD_data2, LQD_data1, LQD_data2, LQD_data1, LQD_data2, LQD_data1]

    const [LQD_data, setLQD_data] = useState(LQD_data2);

    useEffect(() => {
        const interval = setInterval(() => {



            let temp = { ...LQD_data }
            temp.total_abnormal_temperature_HT1 += 1;
            temp.students_without_mask_HT1 += 1;

            LQD_data2.total_abnormal_temperature_HT1 += 1;
            LQD_data2.students_without_mask_HT1 += 1;


            setLQD_data(temp)
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return <Dashboard data={LQD_data} />;
}

export default DashboardLQD;