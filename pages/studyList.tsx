import StudyListContainer from "../components/StudyListContainer";

const studyList = () => {
  return (
    <div className="wrapper h-full bg-ivory overflow-scroll">
      <h1 className="mt-10">나의 스터디</h1>
      <StudyListContainer />
    </div>
  );
};

export default studyList;
