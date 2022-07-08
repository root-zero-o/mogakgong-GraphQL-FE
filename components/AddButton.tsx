import { useRouter } from "next/router";

const AddButton = (props: { link: string }) => {
  const router = useRouter();
  return (
    <div
      className="circle fixed right-5 bottom-5 w-[80px] h-[80px] bg-green_deep shadow-2xl hover:bg-green_mid"
      onClick={() => router.push(`/${props.link}`)}
    >
      <h1 className="mt-2">+</h1>
    </div>
  );
};

export default AddButton;
