import NavMenu from "./nav-menu";
import CartButton from "./ui/cart-button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Flower</h1>

        <NavMenu />
      </div>
      <CartButton />
    </nav>
  );
};

export default Navbar;
