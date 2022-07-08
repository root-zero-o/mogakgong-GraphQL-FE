import { useRouter } from "next/router";

const MainCategory = (props: {
  link: string;
  top?: string;
  bottom?: string;
  bottomPx?: string;
  left?: string;
  right?: string;
  w: string;
  h: string;
  bg: string;
  f_Text: string;
  s_Text: string;
}) => {
  const router = useRouter();
  return (
    <div
      className={`circle shadow-2xl absolute left-[${props.left}px] top-[${props.top}%] 
      right-[${props.right}px] bottom-[${props.bottom}%] bottom-[${props.bottomPx}px] w-[${props.w}px] h-[${props.h}px] bg-${props.bg} text-4xl`}
      onClick={() => router.push(props.link)}
    >
      <h1>{props.f_Text}</h1>
      <h1>{props.s_Text}</h1>
    </div>
  );
};

export default MainCategory;
