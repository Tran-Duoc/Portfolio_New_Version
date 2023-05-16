import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <>
      <h1 className="min-h-screen bg-[#0f1629]">
        <MainLayout>
          <Home />
        </MainLayout>
      </h1>
    </>
  );
}

export default App;
