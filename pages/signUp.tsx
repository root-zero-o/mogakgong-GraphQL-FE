import React from "react";
import { useForm, useFormState } from "react-hook-form";
import Seo from "../components/Seo";
import { User } from "../typings";
import { RegCheck } from "../lib/RegCheck";
import useSignUp from "../hooks/useSignUp";

const signUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      myText: "",
      myHour: [],
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const password = watch("password");

  const onSumbit = (data: User) => {
    useSignUp({ data });
  };

  return (
    <div className="wrapper bg-green_mid py-8">
      <Seo title="회원가입" />
      <div className="circle z-0 absolute w-96 h-96 right-[-80px] top-[-40px] bg-green_light" />
      <div className="circle z-0 absolute w-96 h-96 left-[-100px] bottom-4 bg-ivory" />
      <form
        className="space-y-5 z-40 w-4/5 mx-auto"
        onSubmit={handleSubmit(onSumbit)}
      >
        <h1>회원가입</h1>
        <label
          htmlFor="imgInput"
          className="z-40 circle shadow-md w-[150px] h-[150px] bg-gray hover"
        >
          클릭 후<br />
          프로필 사진 선택
        </label>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input id="imgInput" type="file" className="hidden" />
          <input
            type="email"
            className="invalid:border-2 textInput"
            placeholder="이메일 아이디"
            {...register("email", {
              required: true,
              pattern: RegCheck.EMAIL_PATTERN,
            })}
          />
          {errors.email?.type === undefined &&
            dirtyFields.email === undefined && (
              <h3 className="mt-2 text-sm opacity-0">준호님 바보</h3>
            )}
          {errors.email?.type === undefined && dirtyFields.email === true && (
            <h3 className="mt-2 text-sm">사용 가능한 이메일입니다.😎</h3>
          )}
          {errors.email?.type === "pattern" && (
            <h3 className="mt-2 text-sm text-red_light">
              이메일 형식으로 입력해주세요.
            </h3>
          )}
          {errors.email?.type === "required" && (
            <h3 className="mt-2 text-sm text-red_light">
              사용하실이메일 주소를 입력해주세요.
            </h3>
          )}
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full ">
          <input
            type="text"
            className="textInput"
            placeholder="닉네임(1~4글자)"
            {...register("nickname", {
              required: true,
              maxLength: 4,
            })}
          />
          {errors.nickname?.type === undefined &&
            dirtyFields.nickname === undefined && (
              <h3 className="mt-2 text-sm opacity-0">준호님 바보</h3>
            )}
          {errors.nickname?.type === undefined &&
            dirtyFields.nickname === true && (
              <h3 className="mt-2 text-sm">사용 가능한 닉네임입니다.😎</h3>
            )}
          {errors.nickname?.type === "maxLength" && (
            <h3 className="mt-2 text-sm text-red_light">
              4글자 이하의 닉네임을 입력해주세요.
            </h3>
          )}
          {errors.nickname?.type === "required" && (
            <h3 className="mt-2 text-sm text-red_light">
              사용하실 닉네임을 입력해주세요.
            </h3>
          )}
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="password"
            className="textInput"
            placeholder="비밀번호"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 16,
              pattern: RegCheck.PASSWORD_PATTERN,
            })}
          />
          {errors.password?.type === undefined &&
            dirtyFields.password === undefined && (
              <h3 className="mt-2 text-sm opacity-0">준호님 바보</h3>
            )}
          {errors.password?.type === undefined &&
            dirtyFields.password === true && (
              <h3 className="mt-2 text-sm">사용 가능한 비밀번호입니다.😎</h3>
            )}
          {errors.password?.type === "maxLength" && (
            <h3 className="mt-2 text-sm text-red_light">
              16글자 이하의 비밀번호를 입력해주세요.
            </h3>
          )}
          {errors.password?.type === "minLength" && (
            <h3 className="mt-2 text-sm text-red_light">
              8글자 이상의 비밀번호를 입력해주세요.
            </h3>
          )}
          {errors.password?.type === "pattern" && (
            <h3 className="mt-2 text-sm text-red_light">
              영문, 숫자를 포함해야 합니다.
            </h3>
          )}
          {errors.password?.type === "required" && (
            <h3 className="mt-2 text-sm text-red_light">
              사용하실 비밀번호를 입력해주세요.
            </h3>
          )}
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="password"
            className="textInput"
            placeholder="비밀번호 확인"
            {...register("confirmPassword", {
              required: true,
              validate: {
                matchPassword: (value) => {
                  return value === password;
                },
              },
            })}
          />
          {errors.confirmPassword?.type === undefined &&
            dirtyFields.confirmPassword === undefined && (
              <h3 className="mt-2 text-sm opacity-0">준호님 바보</h3>
            )}
          {errors.confirmPassword?.type === undefined &&
            dirtyFields.confirmPassword === true && (
              <h3 className="mt-2 text-sm">설정하신 비밀번호와 같습니다.😎</h3>
            )}
          {errors.confirmPassword?.type === "matchPassword" && (
            <h3 className="mt-2 text-sm text-red_light">
              설정하신 비밀번호와 다릅니다.
            </h3>
          )}
          {errors.confirmPassword?.type === "required" && (
            <h3 className="mt-2 text-sm text-red_light">
              비밀번호 확인이 필요합니다.
            </h3>
          )}
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="number"
            className="textInput"
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
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="text"
            className="textInput"
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

export default signUp;
