export const Popup = () => {
  const openOptionsPage = () => chrome.runtime.openOptionsPage();

  return (
    <main className="h-[480px] w-[300px] bg-white flex flex-col items-center justify-center">
      <h1 className="text-slate-900 font-semibold text-xl">Popup Component</h1>
      <button className="btn mt-4" onClick={openOptionsPage}>
        Open Options Page
      </button>
    </main>
  );
};
