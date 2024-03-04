export default function (main: string, sub: string) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-8  font-bold text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl/normal 2xl:text-5xl">
        {main}
      </p>
      <p className="mt-6 text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  whitespace-pre text-center">
        {sub}
      </p>
    </div>
  );
}
