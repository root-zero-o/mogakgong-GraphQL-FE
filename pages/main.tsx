import Seo from "../components/Seo";
import MainCategory from "../components/MainCategory";

const main = () => {
  return (
    <div className="wrapper h-full bg-ivory overflow-hidden relative">
      <Seo title="Main" />
      <div className="flex flex-col mt-8 text-25">
        <h3>안녕하세요 영근님!</h3>
        <h3>오늘도 열공해볼까요?</h3>
      </div>

      <MainCategory
        link="studyList"
        left="15"
        top="20"
        w="170"
        h="170"
        bg="green_light"
        f_Text="나의"
        s_Text="스터디"
      />

      <MainCategory
        link="timeCheck"
        right="-40"
        top="30"
        w="220"
        h="220"
        bg="green_mid"
        f_Text="공부시간"
        s_Text="측정"
      />

      <MainCategory
        link="todoList"
        left="-40"
        bottom="10"
        w="280"
        h="280"
        bg="green_deep"
        f_Text="나의 할일"
        s_Text="관리하기"
      />

      <MainCategory
        link="myPage"
        right="-10"
        bottomPx="-20"
        w="180"
        h="180"
        bg="green_mid"
        f_Text="마이"
        s_Text="페이지"
      />
    </div>
  );
};

export default main;
