import ProductHighlights from "./components/ProductHighlights";
import FAQAccordion from "./components/FAQAccordion";
import StickyAddToCart from "./components/StickyAddToCart";
import AnnouncementBar from "./components/AnnouncementBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <AnnouncementBar text="Welcome to Pioneer Events HQ!" />
      <ProductHighlights />
      <FAQAccordion />
      <StickyAddToCart />
    </div>
  );
}

export default App;
