import Image from 'next/image';

const Loading = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-48 h-48 animate-pulse">
        <Image
          src="/icons/loading.svg"
          alt="thresholdusd loading"
          fill={true}
          sizes="(min-width: 1rem) 24vw"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Loading;
