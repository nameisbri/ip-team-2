import "./Finalresults.scss";
import { useState, useEffect } from "react";
// import axios from "axios";

function Finalresults() {
  const [toggle, setToggle] = useState(false);
  const [summary, setSummary] = useState("");

  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <section className="final">
        <h1 className="final__heading">Your New Business Plan Summary</h1>
        <p>Click on a report to view options</p>
        <ul className="button-list">
          <li className="button-list__item">
            <button onClick={handleClick}>Report 1</button>
          </li>
          <li className="button-list__item">
            <button onClick={handleClick}>Report 2</button>
          </li>
          <li className="button-list__item">
            <button onClick={handleClick}>Report 3</button>
          </li>
          <li className="button-list__item">
            <button onClick={handleClick}>Report 4</button>
          </li>
        </ul>
      </section>

      {toggle ? (
        <div className="text-container">
          <h2>Business name:</h2>
          <p>Taco Tempo {summary.businessName}</p>
          <h2>Slogan:</h2>
          <p>Fueling Office Days, One Taco at a Time! {summary.slogan}</p>
          <h2>Sample Ads:</h2>
          <p>Ad Title:</p>
          <p>Busy Workday? We've Got Your Lunch Covered!{summary.adTitle} </p>
          <p>Ad Description:</p>
          <p>
            Say goodbye to boring lunches and hello to fresh, delicious tacos
            made with premium ingredients – delivered straight to your office or
            ready for pick-up in minutes!\n\n🔥 Why Choose Taco Tempo?\n✅ Fresh
            & Fast: Handcrafted tacos with fresh ingredients, ready in no
            time\n💼 Office-Friendly: Perfect for quick breaks or team
            lunches\n🌱 Customizable Options: Vegan, gluten-free, and
            protein-packed choices {summary.description}
          </p>
          <p>Ad Image:</p>
          <p>
            https://example.com/taco_tempo_ad.jpg
            <img src={summary.adImageURL} alt="ad image" />
          </p>
          <h2>Recommended Strategy</h2>
          <p>
            Target office workers with lunch specials and delivery.
            {summary.recommendedStrategy}
          </p>
          <h2>Target Audience</h2>
          <p>
            Office Workers in downtown core.
            {summary.targetAudience}
          </p>
          <h2>Key Message:</h2>
          <p>
            Premium tacos for a productive workday.
            {summary.keyMessage}
          </p>
          <h2>Pricing Strategy</h2>
          <p>
            $8 - $12 per meal, with upsells
            {summary.pricingStrategy}
          </p>
          <h2>Daily Sales Goal</h2>
          <p>
            100 meals/day ($10 avg. per meal) → $1,000/day revenue
            {summary.dailySalesGoal}
          </p>
          <h2>Operating Costs</h2>
          <p>
            $150 - $300/day (including food, wages, and overhead)
            {summary.operatingCosts}
          </p>
          <h2>Break Even Point</h2>
          <p>8-12 months{summary.breakEvenPoint}</p>
          <h2>Set up Costs</h2>
          <p>$25,000 - $35,000{summary.setupCost}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Finalresults;
