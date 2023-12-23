function MenuHamburguer({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={ `menu-hamburguer ${isMenuOpen ? 'open' : ''}` }
      onClick={ toggleMenu }
    >
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  );
}

export default MenuHamburguer;
