import React, { useState, useEffect } from 'react';
import Dashboard from "../../hf_dashboard/hf_dashboard";

function DashboardNH() {
    // use for demo

    let NH_data2 = {
        school_name: 'NGUYỄN HIỀN',
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

    const [NH_data, setNH_data] = useState(NH_data2);

    useEffect(() => {
        const interval = setInterval(() => {



            let temp = { ...NH_data }
            temp.total_abnormal_temperature_HT1 += 1;
            temp.students_without_mask_HT1 += 1;

            NH_data2.total_abnormal_temperature_HT1 += 1;
            NH_data2.students_without_mask_HT1 += 1;


            setNH_data(temp)
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return <Dashboard data={NH_data} />;
}

export default DashboardNH;