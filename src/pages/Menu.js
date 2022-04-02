import { ReactComponent as Logo } from '../assets/logo.svg';

import { SelectionButton } from '../components/UI/Buttons';

const Menu = () => (
  <div className="flex flex-col h-4/6  w-5/6 sx justify-evenly items-center">
    <div className="py-2">
      <Logo />
    </div>
    <section className="bg-semi-dark-navy h-3/6 w-full rounded-lg flex flex-col justify-between items-center py-4">
      <h1 className="font-bold uppercase tracking-wider">pick player 1&apos;s mark</h1>
      <div>
        <SelectionButton>X</SelectionButton>
        <SelectionButton>O</SelectionButton>
      </div>
      <h2 className="font-light uppercase tracking-wide text-xs">Remember: x goes first</h2>
    </section>
    <div>
      <button type="button">New Game (VS CPU)</button>
      <button type="button">New Game (VS Player)</button>
    </div>
  </div>
);

export default Menu;
