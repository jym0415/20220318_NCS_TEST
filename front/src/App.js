// import Funcom from './component/Functioncomponent';
// import Classcom from './component/Classcomponent';
import Conent_interview from './component/interview';
import Conent_interview_form from './component/interviewform';

function App() {
  return (
    <div>
      <Conent_interview botable='interviewlist' titlenm='사전인터뷰'></Conent_interview>
      <Conent_interview_form botable='interviewwrite' titlenm='사전인터뷰'></Conent_interview_form>
   
    </div>
  );
}

export default App;
