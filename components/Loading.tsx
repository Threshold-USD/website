const Loading = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center loading-spinner">
      <div className="spinner"></div>
      <p className="loading-text ml-4 text-center">
        Loading
      </p>
    </div>
  );
};

export default Loading;
