import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type MultipleLinesProps = {
  numElements: number;
  classNameOfLines?: string;
};

const MultipleLines: React.FC<MultipleLinesProps> = ({
  numElements,
  classNameOfLines,
}: MultipleLinesProps) => {
  const elements = [];
  for (let i = 1; i < numElements; i++) {
    elements.push(
      <span
        key={i}
        className={`${
          classNameOfLines ? classNameOfLines : 'h-3.5 w-40 sm:w-60 lg:w-80'
        } inline-block bg-grey/20 rounded-xl animate-pulse`}
      ></span>,
    );
  }

  return <>{elements}</>;
};

type LazyTextProps = {
  text?: string;
  className?: string;
  numberOfLines?: number;
  classNameOfLines?: string;
};

const LazyText = ({
  text,
  className,
  numberOfLines,
  classNameOfLines,
}: LazyTextProps): JSX.Element => {
  const { t, ready } = useTranslation();
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    if (ready) {
      setHasRendered(true);
    }
  }, [ready]);

  return (
    <>
      {!hasRendered ? (
        <span
          className={`inline-block bg-grey/20 ${
            className ?? 'h-3.5 w-[5em]'
          } rounded-xl animate-pulse`}
        ></span>
      ) : text ? (
        t(text)
      ) : (
        ''
      )}
      {!hasRendered
        ? numberOfLines && (
            <MultipleLines
              numElements={numberOfLines}
              classNameOfLines={classNameOfLines}
            />
          )
        : null}
    </>
  );
};

export default LazyText;
