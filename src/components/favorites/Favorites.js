import MenuCard from "../manuCard/MenuCard";
import "./Favorites.css";

function Favorites() {
  return (
    <div className="favorites">
      <div className="favorites__title">
        <p>Some of Our Favorites</p>
      </div>
      <div className="favorites__cards">
        <MenuCard
          src="https://i.ibb.co/4FWNDzq/Coffee-Rubbed-Burger.png"
          title="Coffee Rubbed Burger"
          description="Juicy Burger With a Spiced Coffee Rub, Topped With Peppered Bacon & a Lip Smacking Dr Pepper BBQ Sauce!"
          price="$15.15"
        />
        <MenuCard
          src="https://i.ibb.co/qySW1CT/With-Cheese-Brie.png"
          title="Cheese Brie Burger"
          description="Cheese Brie, Blue Cheese, Mozzarella, Tomatoes & Arugula"
          price="$13.15"
        />
        <MenuCard
          src="https://i.ibb.co/ZS2RvpR/Pulled-Pork.png"
          title="Pulled Pork Burger"
          description="Slow Cooked in Homemade BBQ Sauce Pulled Pork"
          price="$15.15"
        />
        {/* <MenuCard
          src="https://i.ibb.co/0YrS15S/Jose-Mendoza.png"
          title="Jose Mendoza"
          description="Bacon, Roasted Green Chiles, Monterey Jack, House Sauce, Grilled Onion & Pickle"
          price="$12.75"
        /> */}
        <MenuCard
          src="https://i.ibb.co/SDkwq0h/Chicken-Burger.png"
          title="Chicken Burger"
          description="Chicken Burger With Tomatoes, Lettuce & Sauce"
          price="$12.75"
        />
        <MenuCard
          src="https://i.ibb.co/rbk3LbS/Avocado-Chicken-Burger.png"
          title="Avocado Chicken Burger"
          description="Parmesan, Avocado, Garlic & a Hint of Dried Sage"
          price="$12.15"
        />
        <MenuCard
          src="https://i.ibb.co/tMzy7Z8/New-York-Pastrami.png"
          title="New York Pastrami Burger"
          description="Juicy Burger, Topped With Fresh Warm Slices of Pastrami, Swiss Cheese, & a Delicious Creamy Sauce"
          price="$14.15"
        />
        {/* <MenuCard
          src="https://i.ibb.co/JRcnGTD/Classic.png"
          title="Classic Burger"
          description="Bacon, American, Lettuce, Tomato, House Sauce, Grilled Onions & Pickle"
          price="11.75"
        /> */}
        {/* <MenuCard
          src="https://i.ibb.co/wMkzxYh/Fun-Guy.jpg"
          title="Fun Guy"
          description="Bacon, Mushroom, Swiss Fondue, House Sauce, Grilled Onion & Pickle"
          price="$12.15"
        /> */}
        {/* <MenuCard
          src="https://i.ibb.co/CJ70bb4/Peanut-Butter-Pickle-Bacon.jpg"
          title="Peanut Butter Pickle Bacon"
          description="Bacon, Peanut Butter Sauce, House Sauce, Mayo, Grilled Onion & Pickle"
          price="$12.15"
        /> */}
        {/* <MenuCard
          src="https://i.ibb.co/WH0PkK6/Meathead.jpg"
          title="Meathead"
          description="Bacon, Double Patties, Double Cheddar, Grilled Onion, House Sauce & Ketchup"
          price="$14.15"
        /> */}
        {/* <MenuCard
          src="https://i.ibb.co/wMnSjWk/Red-Molly.jpg"
          title="Red-Molly"
          description="Bacon, Philly Steak, Brined Red Peppers, Provolone, Mayo, House Sauce & Grilled Onion"
          price="14.15"
        /> */}
      </div>
      <div className="favorites__openMenu">
        <span className="favorites__fullMenu">Open Full Menu</span>
      </div>
    </div>
  );
}

export default Favorites;
