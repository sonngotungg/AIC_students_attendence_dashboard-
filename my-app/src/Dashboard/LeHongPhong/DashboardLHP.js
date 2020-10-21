import React, { useState, useEffect } from 'react';
import Dashboard from "../../hf_dashboard/hf_dashboard";

function DashboardLHP() {
    // use for demo
    // let history = useHistory();

    let LHP_data1 = {
        school_name: 'LÊ HỒNG PHONG',
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

    const [LHP_data, setLHP_data] = useState(LHP_data1);

    useEffect(() => {
        // window.onbeforeunload = function () {
        //     console.log('1234')
        //     history.push('/dashboard/lehongphong')
        // }

        const interval = setInterval(() => {



            let temp = { ...LHP_data }
            temp.total_abnormal_temperature_HT1 += 1;
            temp.students_without_mask_HT1 += 1;
            temp.students_without_mask_HT2 += 1;

            LHP_data1.total_abnormal_temperature_HT1 += 1;
            LHP_data1.students_without_mask_HT1 += 1;
            LHP_data1.students_without_mask_HT2 += 1;

            setLHP_data(temp)
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return <Dashboard data={LHP_data} />;
}

export default DashboardLHP;