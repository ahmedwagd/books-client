import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
