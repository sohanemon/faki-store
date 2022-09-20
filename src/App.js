// import Counter from "./components/counter";
import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import LoadData from "./components/load-data";

function App() {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <div>
      <Header />
      {/* <Counter /> */}
      <LoadData setShowFooter={setShowFooter} />
      {showFooter ? <Footer /> : null}
    </div>
  );
}

export default App;
