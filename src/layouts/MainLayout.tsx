import { Navbar } from "../components/ui";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default MainLayout;
