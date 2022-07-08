import StudyListContainer from "../components/StudyListContainer";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";

const studyList = () => {
  return (
    <div className="wrapper h-full bg-ivory overflow-scroll relative">
      <h1 className="mt-10">나의 스터디</h1>
      <BackButton />
      <AddButton link="addStudyList" />
      <StudyListContainer />
    </div>
  );
};

export default studyList;
