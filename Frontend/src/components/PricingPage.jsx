import FreePage from "../pages/FreePage";
import GoldPage from "../pages/GoldPage";
import PlatinumPage from "../pages/PlatinumPage";

export default function PricingPage() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "2px solid black" }}>
          <FreePage />
        </div>
        <div style={{ border: "2px solid black" }}>
          <GoldPage />
        </div>
        <div style={{ border: "2px solid black" }}>
          <PlatinumPage />
        </div>
      </div>
    </>
  );
}
