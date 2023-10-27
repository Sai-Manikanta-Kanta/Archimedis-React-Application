import "./App.css";
import Navigation from "./components/Navigation";
import PageEight from "./components/PageEight";
import PageEleven from "./components/PageEleven";
import PageFivee from "./components/PageFivee";
import PageFour from "./components/PageFour";
import PageNine from "./components/PageNine";
import PageOne from "./components/PageOne";
import PageSeven from "./components/PageSeven";
import PageSix from "./components/PageSix";
import PageTen from "./components/PageTen";
import PageThree from "./components/PageThree";
import PageTwelve from "./components/PageTwelve";
import PageTwo from "./components/PageTwo";




function App() {
  return (
    <div className="App">
      <Navigation />
      <PageOne />
      <PageTwo />
      <PageThree/>
      <PageFour/>
      <PageFivee/>
      <PageSix/>
      <PageSeven/>
      <PageEight/>
      <PageNine/>
      <PageTen/>
      <PageEleven/>
      <PageTwelve title="Board of Directors"   />
      <PageTwelve title="Leadership Team"   />
      <PageTwelve title=""   />
    </div>
  );
}

export default App;
