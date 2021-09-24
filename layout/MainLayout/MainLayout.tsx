import Header from 'components/Header/Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div id="main">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
