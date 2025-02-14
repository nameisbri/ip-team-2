import "./Finalresults.scss";
import { useState, useEffect } from "react";
import tacoSprint from "../../assets/images/professional-lowBudget-advertisement.png";
import tacoHaven from "../../assets/images/family-highBudget-advertisement.png";
import summaryData from "../../data/summary.json";
// import axios from "axios";

function Finalresults() {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);
  const [summary, setSummary] = useState("");

  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  const handleClickTwo = () => {
    setToggleTwo((prev) => !prev);
  };
  const handleClickThree = () => {
    setToggleThree((prev) => !prev);
  };
  const handleClickFour = () => {
    setToggleFour((prev) => !prev);
  };

  return (
    <div>
      <section className="final">
        <h1 className="final__heading">Your New Business Plan Summary</h1>
        <p>Click on a report to view options</p>
        <ul className="button-list">
          <li className="button-list__item">
            <button
              className={`button-list__button ${
                toggle ? "button-list__button--active" : ""
              }`}
              onClick={handleClick}
            >
              Report 1
            </button>
          </li>
          <li className="button-list__item">
            <button
              className={`button-list__button ${
                toggleTwo ? "button-list__button--active" : ""
              }`}
              onClick={handleClickTwo}
            >
              Report 2
            </button>
          </li>
          <li className="button-list__item">
            <button
              className={`button-list__button ${
                toggleThree ? "button-list__button--active" : ""
              }`}
              onClick={handleClickThree}
            >
              Report 3
            </button>
          </li>
          <li className="button-list__item">
            <button
              className={`button-list__button ${
                toggleFour ? "button-list__button--active" : ""
              }`}
              onClick={handleClickFour}
            >
              Report 4
            </button>
          </li>
        </ul>
      </section>

      {toggle ? (
        <div className="text">
          <div className="text-container">
            <h2>For a taco business, office workers target, and high budget</h2>
            <h3>Business name:</h3>
            <p>Taco Tempo {summary[0].businessName}</p>
            <h3>Slogan:</h3>
            <p>Fueling Office Days, One Taco at a Time! {summary.slogan}</p>
            <h3>Sample Ads:</h3>
            <p>Ad Title:</p>
            <p>Busy Workday? We've Got Your Lunch Covered!{summary.adTitle} </p>
            <p>Ad Description:</p>
            <p>
              Say goodbye to boring lunches and hello to fresh, delicious tacos
              made with premium ingredients – delivered straight to your office
              or ready for pick-up in minutes!🔥 Why Choose Taco Tempo? ✅ Fresh
              & Fast: Handcrafted tacos with fresh ingredients, ready in no time
              💼 Office-Friendly: Perfect for quick breaks or team lunches🌱
              Customizable Options: Vegan, gluten-free, and protein-packed
              choices {summary.description}
            </p>
            <p>Ad Image:</p>
            <p>
              <img src={tacoSprint} alt="ad image" />
            </p>
            <h3>Recommended Strategy</h3>
            <p>
              Target office workers with lunch specials and delivery.
              {summary.recommendedStrategy}
            </p>
            <h3>Target Audience</h3>
            <p>
              Office Workers in downtown core.
              {summary.targetAudience}
            </p>
            <h3>Key Message:</h3>
            <p>
              Premium tacos for a productive workday.
              {summary.keyMessage}
            </p>
            <h3>Pricing Strategy</h3>
            <p>
              $8 - $12 per meal, with upsells
              {summary.pricingStrategy}
            </p>
            <h3>Daily Sales Goal</h3>
            <p>
              100 meals/day ($10 avg. per meal) → $1,000/day revenue
              {summary.dailySalesGoal}
            </p>
            <h3>Operating Costs</h3>
            <p>
              $150 - $300/day (including food, wages, and overhead)
              {summary.operatingCosts}
            </p>
            <h3>Break Even Point</h3>
            <p>8-12 months{summary.breakEvenPoint}</p>
            <h3>Set up Costs</h3>
            <p>$25,000 - $35,000{summary.setupCost}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      {toggleTwo ? (
        <div className="text">
          <div className="text-container">
            <h2>For a taco business, office workers target, and low budget</h2>
            <h3>Business name:</h3>
            <p>Taco Sprint {summary.businessName}</p>
            <h3>Slogan:</h3>
            <p>Fast. Fresh. Affordable.{summary.slogan}</p>
            <h3>Sample Ads:</h3>
            <p>Ad Title:</p>
            <p>
              Craving a Delicious, Affordable Lunch? Look No Further!
              {summary.adTitle}{" "}
            </p>
            <p>Ad Description:</p>
            <p>
              Introducing Taco Sprint – your go-to spot for quick, tasty, and
              budget-friendly tacos made fresh every day! Whether you’re
              grinding through deadlines or need a delicious mid-day pick-me-up,
              we’ve got you covered.✅ $8 Tacos – Big flavor without breaking
              the bank ⏱️ Speedy Service – In and out in minutes 🌱 Fresh
              Ingredients – Quality you can taste in every bite
              {summary.description}
            </p>
            <p>Ad Image:</p>
            <p>
              <img src={tacoSprint} alt="ad image" />
            </p>
            <h3>Recommended Strategy</h3>
            <p>
              Focus on affordability and speed for office workers.
              {summary.recommendedStrategy}
            </p>
            <h3>Target Audience</h3>
            <p>
              Office Workers seeking quick and cheap lunch
              {summary.targetAudience}
            </p>
            <h3>Key Message:</h3>
            <p>
              Delicious and affordable tacos fast!
              {summary.keyMessage}
            </p>
            <h3>Pricing Strategy</h3>
            <p>
              $8 - $12 per meal, with upsells
              {summary.pricingStrategy}
            </p>
            <h3>Daily Sales Goal</h3>
            <p>
              100 meals/day ($10 avg. per meal) → $1,000/day revenue
              {summary.dailySalesGoal}
            </p>
            <h3>Operating Costs</h3>
            <p>
              $150 - $300/day
              {summary.operatingCosts}
            </p>
            <h3>Break Even Point</h3>
            <p>4-6 months{summary.breakEvenPoint}</p>
            <h3>Set up Costs</h3>
            <p>$12,000 - $15,000{summary.setupCost}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      {toggleThree ? (
        <div className="text">
          <div className="text-container">
            <h2>For a taco business, families target, and high budget</h2>
            <h3>Business name:</h3>
            <p>Taco Haven {summary.businessName}</p>
            <h3>Slogan:</h3>
            <p>Fueling Office Days, One Taco at a Time! {summary.slogan}</p>
            <h3>Sample Ads:</h3>
            <p>Ad Title:</p>
            <p>Busy Workday? We've Got Your Lunch Covered!{summary.adTitle} </p>
            <p>Ad Description:</p>
            <p>
              Say goodbye to boring lunches and hello to fresh, delicious tacos
              made with premium ingredients – delivered straight to your office
              or ready for pick-up in minutes!🔥 Why Choose Taco Tempo?✅ Fresh
              & Fast: Handcrafted tacos with fresh ingredients, ready in no time
              💼 Office-Friendly: Perfect for quick breaks or team lunches 🌱
              Customizable Options: Vegan, gluten-free, and protein-packed
              choices {summary.description}
            </p>
            <p>Ad Image:</p>
            <p>
              <img src={tacoHaven} alt="ad image" />
            </p>
            <h3>Recommended Strategy</h3>
            <p>
              Family-friendly atmosphere and meal deals.
              {summary.recommendedStrategy}
            </p>
            <h3>Target Audience</h3>
            <p>
              Families
              {summary.targetAudience}
            </p>
            <h3>Key Message:</h3>
            <p>
              Tacos the whole family will love.
              {summary.keyMessage}
            </p>
            <h3>Pricing Strategy</h3>
            <p>
              $8 - $12 per meal, with upsells
              {summary.pricingStrategy}
            </p>
            <h3>Daily Sales Goal</h3>
            <p>
              $6 - $10 per meal, with upsells
              {summary.dailySalesGoal}
            </p>
            <h3>Operating Costs</h3>
            <p>
              $150 - $250/day
              {summary.operatingCosts}
            </p>
            <h3>Break Even Point</h3>
            <p>9-12 months{summary.breakEvenPoint}</p>
            <h3>Set up Costs</h3>
            <p>$25,000 - $35,000{summary.setupCost}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {toggleFour ? (
        <div className="text">
          <div className="text-container">
            <h2>For a taco business, families target, and low budget</h2>
            <h3>Business name:</h3>
            <p>Taco Familia{summary.businessName}</p>
            <h3>Slogan:</h3>
            <p>Affordable Family Fun with Tacos!{summary.slogan}</p>
            <h3>Sample Ads:</h3>
            <p>Ad Title:</p>
            <p>
              Craving a Delicious, Affordable Lunch? Look No Further!
              {summary.adTitle}{" "}
            </p>
            <p>Ad Description:</p>
            <p>
              Introducing Taco Sprint – your go-to spot for quick, tasty, and
              budget-friendly tacos made fresh every day! Whether you’re
              grinding through deadlines or need a delicious mid-day pick-me-up,
              we’ve got you covered. ✅ $8 Tacos – Big flavor without breaking
              the bank\n⏱️ Speedy Service – In and out in minutes 🌱 Fresh
              Ingredients – Quality you can taste in every bite
              {summary.description}
            </p>
            <p>Ad Image:</p>
            <p>
              <img src={tacoHaven} alt="ad image" />
            </p>
            <h3>Recommended Strategy</h3>
            <p>
              Partner with local schools and family attractions.
              {summary.recommendedStrategy}
            </p>
            <h3>Target Audience</h3>
            <p>
              Families on a budget
              {summary.targetAudience}
            </p>
            <h3>Key Message:</h3>
            <p>
              Tacos for the whole family without breaking the bank.
              {summary.keyMessage}
            </p>
            <h3>Pricing Strategy</h3>
            <p>
              $6 - $10 per meal, with upsells
              {summary.pricingStrategy}
            </p>
            <h3>Daily Sales Goal</h3>
            <p>
              80 meals/day ($8 avg. per meal) → $640/day revenue
              {summary.dailySalesGoal}
            </p>
            <h3>Operating Costs</h3>
            <p>
              $150 - $250/day
              {summary.operatingCosts}
            </p>
            <h3>Break Even Point</h3>
            <p>5-7 months{summary.breakEvenPoint}</p>
            <h3>Set up Costs</h3>
            <p>$12,000 - $15,000{summary.setupCost}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Finalresults;
