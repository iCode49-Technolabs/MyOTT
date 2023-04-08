import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IEP from "./components/IEP/IEP"
import UserDetails from "./components/pages/UserDetails"
import TrackProgress from "./components/pages/TrackProgress"
import Login from "./components/Login/Login"
import CurriculumSelection from "./components/pages/CurriculumSelection"
import Application_SystemAdmin from './components/SystemAdmin/Application_SystemAdmin';
import School_SystemAdmin from './components/School_SystemAdmin/School_SystemAdmin';
import LearningCoordinator from './components/LearningCoordinator/LearningCoordinator';
import AssessmentRequests from './components/AssessmentRequests/AssessmentRequests';
import AssessmentRequest from './components/AssessmentRequest/AssessmentRequest';
import SchoolDetails from './components/SchoolsDetails/SchoolDetails';
import SchoolOnboarding from './components/SchoolOnboarding/SchoolOnboarding';

import StudentVoiceChoice from './components/StudentVoiceChoice/StudentVoiceChoice';
import Teacher from './components/Teacher/Teacher';
import StudentComment from "./components/StudentComment/StudentComment"
import NotesForStudent from "./components/NotesForStudent/NotesForStudent"
import StudentChart from "./components/StudentChart/StudentChart"
import Assignation from './components/School_SystemAdmin/Assignation/Assignation';
import StudentDetails from './components/StudentDetails/StudentDetails';
import ModificationForStudent from './components/ModificationForStudent/ModificationForStudent';
import Setting from './components/Setting/Setting';
import Student_Profile from './components/Student_Profile/Student_Profile';
import ReviewPastIEP from './components/ReviewPastIEP/ReviewPastIEP';
import OrganiseFormalAssessment from "./components/OrganiseFormalAssessment/OrganiseFormalAssessment"
import DocumentRepositry from './components/DocumentRepositry/DocumentRepositry';
import TeacherProfile from "./components/TeacherProfile/TeacherProfile"
import ConversationParentTeacher from './components/ConversationParentTeacher/ConversationParentTeacher';
import TeacherCardPages from './components/TeacherCardPages/TeacherCardPages';

//1C
import LessonUnitPlan from './components/LessonUnitPlan/LessonUnitPlan';
import TrackStudentProgress from './components/TrackStundetProgress/TrackStudentProgress';
const App=()=> {
  return (
    <div>
      
      
      <Routes>
      < Route path='/TeacherProfile' element={<TeacherProfile key="TeacherProfile"/>}/>
      < Route path='/Create_Review_Unit_Lesson_Plans' element={<TeacherCardPages key="Create_Review_Unit_Lesson_Plans" type="Create/Review Unit & Lesson Plans"/>}/>
      < Route path='/Students_list' element={<TeacherCardPages key="Students_list" type="Student List"/>}/>
      
      < Route path='/Assessment_Report_Request' element={<TeacherCardPages key="Assessment_Report_Request" type="Assessment Report Request"/>}/>
      < Route path='/Updates_from_Learning_Coordinator' element={<TeacherCardPages key="Updates_from_Learning_Coordinator" type="Updates from Learning Coordinator"/>}/>
      < Route path='/Record_Evidence_Comments' element={<TeacherCardPages key="Record_Evidence_Comments" type="Record Evidence/Comments"/>}/>
      <Route path='/IEPDocumentRepositry' element={<DocumentRepositry key="IEPDocumentRepositry" type="iep"/>} />
      <Route path='/FormalAssessmentDocumentRepositry' element={<DocumentRepositry key="FormalAssessmentDocumentRepositry" type="formal_assessment"/>} />
      <Route path='/IndividualAssessmentRequest' element={<AssessmentRequest key="AssessmentRequest" />} />
      < Route path='/ModificationForStudent' element={<ModificationForStudent key="ModificationForStudent"/>}/>
      < Route path='/OrganiseFormalAssessment' element={<OrganiseFormalAssessment key="OrganiseFormalAssessment"/>}/>
        < Route path='/StudentComment' element={<StudentComment key="StudentComment"/>}/>
        < Route path='/NotesForStudent' element={<NotesForStudent key="NotesForStudent"/>}/>
        < Route path='/TotalStudentDetails' element={<StudentDetails type="total" key="TotalStudentDetails"/>}/>
        < Route path='/AllStudentDetails' element={<AssessmentRequests type="all" key="AllStudentDetails"/>}/>
        < Route path='/NewStudentDetails' element={<AssessmentRequests type="new" key="NewStudentDetails"/>}/>
        < Route path='/ActiveStudentDetails' element={<StudentDetails type="active" key="ActiveStudentDetails"/>}/>
        < Route path='/ReportStudentDetails' element={<StudentDetails type="report" key="ReportStudentDetails"/>}/>
        < Route path='/StudentChart' element={<StudentChart key="StudentChart"/>}/>
        <Route path='/LearningCoordinator' element={<LearningCoordinator key="LearningCoordinator"/>} />
        <Route path='/Setting' element={<Setting key="Setting"/>} />
        <Route path='/CurriculumSelection' element={<CurriculumSelection key="CurriculumSelection"/>} />
        <Route path='/AssessmentRequests' element={<AssessmentRequests key="AssessmentRequests" type="assessment_request"/>} />
        <Route path='/CurrentTracking' element={<AssessmentRequests key="CurrentTracking" type="current_tracking"/>} />
        <Route path='/UpcomingReview' element={<AssessmentRequests key="UpcomingReview" type="upcoming_review"/>} />
        <Route path='/OverdueReview' element={<AssessmentRequests key="OverdueReview" type="overdue_review"/>} />

        {/* 1C */}
        <Route path="/CreateLessonUnitPlan" element={<LessonUnitPlan key="CreateLessonUnitPlan" type="CreateLessonUnitPlan"/>}/>
        <Route path="/ViewLessonPlan" element={<LessonUnitPlan key="CreateLessonUnitPlan" type="ViewLessonPlan"/>}/>
        <Route path="/ViewUnitPlan" element={<LessonUnitPlan key="CreateLessonUnitPlan" type="ViewUnitPlan"/>}/>
        <Route path='/TrackStudentProgress' element={<TrackStudentProgress key="TrackStudentProgress"/>}/>
{/* 1C */}

        <Route path='/UserDetails' element={<UserDetails key="UserDetails"/>} />
        <Route path='/IEP' element={<IEP key="IEP" type="create"/>} />
        <Route path='/ReviseIEP' element={<IEP key="ReviseIEP" type="revise"/>} />
        <Route path='/ReviewPastIEP' element={<ReviewPastIEP key="ReviewPastIEP"/>} />
        <Route path='/Assignation' element={<Assignation key="Assignation"/>} />
        <Route path='/Teacher' element={<Teacher key="Teacher"/>} />
        <Route path='/TrackProgress' element={<TrackProgress key="TrackProgress"/>} />
        <Route path='/ConversationTeacherParent' element={<ConversationParentTeacher key="ConversationTeacherParent"/>} />
        <Route path='/StudentVoiceChoice' element={<StudentVoiceChoice key="StudentVoiceChoice"/>} />
        <Route path='/Application_SystemAdmin' element={<Application_SystemAdmin key="Application_SystemAdmin"/>} />
        <Route path='/School_SystemAdmin' element={<School_SystemAdmin key="School_SystemAdmin"/>} />
        <Route path='/SchoolOnboarding' element={<SchoolOnboarding key="SchoolOnboarding"/>} />
        <Route path='/StudentProfile' element={<Student_Profile key="StudentProfile"/>} />
        <Route path="/SchoolsDetails" element={<SchoolDetails key="SchoolsDetails"/>}/>
        <Route path='/' element={<Login key="Login"/>} />
      </Routes>
    
      
    </div>
  );
};

export default App;
