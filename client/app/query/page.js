import "./page.css";

import ListItems from "./(components)/ListItems";
import FilterSection from "./(components)/FilterSection";

const page = () => {
  return (
    <main id="query">
      <FilterSection />
      <section className="item-container">
        <ListItems />
      </section>
    </main>
  );
};

export default page;
