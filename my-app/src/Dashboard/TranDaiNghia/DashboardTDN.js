import React, { useState, useEffect } from 'react';
import Dashboard from "../../hf_dashboard/hf_dashboard";

function DashboardTDN() {
    // use for demo

    let TDN_data1 = {
        school_name: 'TRẦN ĐẠI NGHĨA',
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

    let TDN_data2 = {
        school_name: 'TRẦN ĐẠI NGHĨA',
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



    const [TDN_data, setTDN_data] = useState(TDN_data2);

    useEffect(() => {
        const interval = setInterval(() => {



            let temp = { ...TDN_data }
            temp.total_abnormal_temperature_HT1 += 1;
            temp.students_without_mask_HT1 += 1;

            TDN_data2.total_abnormal_temperature_HT1 += 1;
            TDN_data2.students_without_mask_HT1 += 1;


            setTDN_data(temp)
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return <Dashboard data={TDN_data} />;
}

export default DashboardTDN;