import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { User } from "../typings";
import useSignUp from "../hooks/useSignUp";

const socialSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      myText: "",
      myHour: [],
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const onSumbit = (data: User) => {
    useSignUp({ data });
  };

  return (
    <div className="wrapper bg-green_mid w-full h-full py-10">
      <div className="circle z-0 absolute w-96 h-96 right-[-80px] top-[-40px] bg-ivory" />
      <form
        className="w-4/5 mx-auto space-y-5"
        onSubmit={handleSubmit(onSumbit)}
      >
        <h1 className="mb-5">추가정보 입력</h1>
        <div className="inputDiv">
          <input
            type="number"
            placeholder="목표 공부시간"
            {...register("myHour", {
              required: true,
              max: 999,
              min: 1,
            })}
          />
          {errors.myHour?.type === undefined &&
            dirtyFields.myHour === undefined && (
              <h3 className="mt-2 text-sm opacity-0">준호님 바보</h3>
            )}
          {errors.myHour?.type === undefined &&
            dirtyFields.myHour !== undefined && (
              <h3 className="mt-2 text-sm">사용 가능한 목표 시간입니다.😎</h3>
            )}
          {errors.myHour?.type === "max" && (
            <h3 className="mt-2 text-sm text-red_light">
              목표시간은 최대 999시간까지 설정이 가능합니다.
            </h3>
          )}
          {errors.myHour?.type === "min" && (
            <h3 className="mt-2 text-sm text-red_light">
              목표시간은 최소 1시간부터 설정이 가능합니다.
            </h3>
          )}
          {errors.myHour?.type === "required" && (
            <h3 className="mt-2 text-sm text-red_light">
              목표 공부시간을 설정해주세요.
            </h3>
          )}
        </div>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="각오 한 마디(최대 20자)"
            {...register("myText", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.myText?.type === undefined &&
            dirtyFields.myText === undefined && (
              <h3 className="mt-2 text-sm opacity-0">준호님 바보</h3>
            )}
          {errors.myText?.type === undefined && dirtyFields.myText === true && (
            <h3 className="mt-2 text-sm">각오가 느껴지네요!😎</h3>
          )}
          {errors.myText?.type === "maxLength" && (
            <h3 className="mt-2 text-sm text-red_light">
              20자 이하로 입력해주세요.
            </h3>
          )}
          {errors.myText?.type === "required" && (
            <h3 className="mt-2 text-sm text-red_light">
              각오 한 마디를 작성해주세요.
            </h3>
          )}
        </div>
        {isValid ? (
          <button className="z-40 submitBtn bg-green_light" type="submit">
            가입하기
          </button>
        ) : (
          <button className="z-40 submitBtn bg-gray" type="submit" disabled>
            가입 조건을 만족해주세요.
          </button>
        )}
      </form>
    </div>
  );
};

export default socialSignUp;
