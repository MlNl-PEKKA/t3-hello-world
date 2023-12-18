const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <section className="flex h-screen w-screen items-center justify-center font-sans">
      {children}
    </section>
  );
};

export default DefaultLayout;
