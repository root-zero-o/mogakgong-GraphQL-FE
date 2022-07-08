import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  const b = "<";
  return (
    <div className="fixed top-5 left-5" onClick={() => router.back()}>
      <h1 className="mt-2">{b}</h1>
    </div>
  );
};

export default BackButton;
