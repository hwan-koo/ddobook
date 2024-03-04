"use client";
import Image from "next/image";
import yellowBlueCircle from "./components/yellowBlueCircle";
import mainDescriptive from "./components/mainDescriptive";

import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const slackURL = process.env.NEXT_PUBLIC_SLACK_URL;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // 폼 제출 처리
    setInputValue("");

    // 팝업 창 띄우기
    window.alert("빠르게 연락드리겠습니다 :)");
    const url = `${process.env.NEXT_PUBLIC_SLACK_URL}`;
    const data = { text: `새로운 요청이 들어왔어요 ! ${inputValue}` };

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  const heroMessage = `아이들이 스스로 만드는\n학습영어 콘텐츠`;
  const heromSubMessage = `또북은 모든 아이들이 수업의 주인공이 되는 날까지\n선생님들과 함께 교육환경을 발전시켜 나갑니다.`;
  const mainStartMessage = `아이들이 직접 만드는 이야기 또북으로\n아이 맞춤형 학습을 시작해보세요`;
  const mainFirstMessage = `아이들이 스토리를 만들기전,\n선생님이 아이들 스토리에 들어갈 필수 학습 단어·표현을 지정할 수 있어요`;
  const mainSecondMessage = `아이의 상상력을 담은 문장 한 줄이면 AI가 학습 범위 내의 내용을 바탕으로\n흥미로운 스토리를 만들어줘요`;
  const mainThirdMessage = `학생들이 만든 스토리를 바탕으로 필수 학습 범위 내의 문제도 출제할 수 있어요`;
  const mainFourthMessage = `한 눈에 들어오는 대시보드로 학습 현황을 관리하고\n학생들과 실시간 피드백을 주고받아 보세요!`;
  const mainFifthMessage = `스토리를 감상하거나 문제를 풀던 중 모르는게 생긴다면?\nAI 튜터에게 물어보세요! 학생들의 학습 데이터를 바탕으로 맞춤 추천 콘텐츠까지 추천해줄거에요`;
  return (
    <div>
      <header>
        <div className=" bg-white bg-opacity-60 w-full aspect-[100/7] pl-[7%] pr-[7%]  flex justify-between items-center">
          <Image
            className="w-[6%] aspect-[100/55]"
            src="/logo.png"
            alt=""
            width={100}
            height={55}
          />
          <div className="bg-[#347CF8] w-[15%] lg:w-[12%] aspect-[200/56]  rounded-3xl items-center justify-center flex">
            <span className="text-white font-bold text-[8px] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              도입 문의
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full "
            src="/hero.png"
            alt=""
            width={1922}
            height={822}
          />
          <p className="absolute top-[40%] left-[10%] right-0 bottom-0 flex font-extrabold text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl/normal 2xl:text-6xl/normal  whitespace-pre ">
            {heroMessage}
          </p>
          <p className="absolute bottom-[10%]  sm:bottom-[22%] left-[10%] right-0  flex  text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  whitespace-pre ">
            {heromSubMessage}
          </p>
        </div>
      </header>
      <main className="w-full bg-[#F4F9FF] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-32 2xl:pt-40 ">
        <div className="flex items-center justify-center">
          <Image
            className="w-[87.5%] "
            src="/mainstart.png"
            alt=""
            width={1922}
            height={1213}
          />
        </div>
        <div className="w-full flex justify-center items-center pt-12 sm:pt-16 md:pt-20 lg:pt-32 xl:pt-40 2xl:pt-44 flex-col">
          <Image
            className="w-[13.3%] aspect-[100/55]"
            src="/logo.png"
            alt=""
            width={257}
            height={142}
          />
          <p className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40 font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl/normal 2xl:text-6xl/normal  whitespace-pre text-center">
            {mainStartMessage}
          </p>
        </div>
        <div className="w-full flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40 flex-col items-center ">
          {yellowBlueCircle("1")}
          {mainDescriptive("학습 범위 입력", mainFirstMessage)}
          <div className="flex justify-center items-center mt-24">
            <Image
              className="w-[56.4%] aspect-[100/69]"
              src="/main1.png"
              alt=""
              width={1083}
              height={751}
            />
          </div>
          {yellowBlueCircle("2")}
          {mainDescriptive("자기 주도형 스토리텔링", mainSecondMessage)}
          <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40">
            <Image
              className="w-[96.4%] aspect-[100/40]"
              src="/main2.png"
              alt=""
              width={1851}
              height={745}
            />
          </div>
          {yellowBlueCircle("3")}
          {mainDescriptive("스토리 기반 학습 콘텐츠", mainThirdMessage)}
          <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40">
            <Image
              className="w-[90.4%] aspect-[100/73]"
              src="/main3.png"
              alt=""
              width={1736}
              height={1265}
            />
          </div>
          {yellowBlueCircle("4")}
          {mainDescriptive("실시간 피드백", mainFourthMessage)}
          <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40">
            <Image
              className="w-[56.4%] aspect-[100/87]"
              src="/main4.png"
              alt=""
              width={1083}
              height={942}
            />
          </div>
          {yellowBlueCircle("5")}
          {mainDescriptive("AI 튜터", mainFifthMessage)}
          <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40">
            <Image
              className="w-[93.2%] aspect-[100/42]"
              src="/main5.png"
              alt=""
              width={1790}
              height={751}
            />
          </div>
          <p className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40 font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl/normal 2xl:text-6xl/normal  whitespace-pre text-center">
            왜 또북인가요?
          </p>
          <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40">
            <Image
              className="w-[87.5%] aspect-[100/48]"
              src="/main6.png"
              alt=""
              width={1681}
              height={808}
            />
          </div>
          <p className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40 text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  whitespace-pre text-center">
            {"이메일을 남겨주시면 또북 컨설턴트가 빠르게 답쟁해드릴게요 :)"}
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center mt-6 sm:mt-10 flex-col"
          >
            <input
              type="email"
              required
              placeholder="korea9kh@naver.com"
              className="w-[41.6%] aspect-[100/10] rounded-3xl border-2 border-[#6BA1FF] pl-[3.75%] placeholder:text-[8px] sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-2xl text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button
              type="submit"
              className="mt-6 sm:mt-10 w-[12.5%] aspect-[3/1] bg-[#347CF8] text-white font-bold text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-[40px]"
            >
              도입 문의
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
