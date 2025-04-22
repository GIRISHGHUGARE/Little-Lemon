import { LittleLemonHeader } from './components/LittleLemonHeader.js';
import { LittleLemonFooter } from './components/LittleLemonFooter.js';
import MenuItems from './components/MenuItems.js';
import FeedbackForm from './components/FeedBackForm.js';
import PressablePage  from './components/PressablePage.js';


export default function App() {
  return (
    <>
      <LittleLemonHeader />
      <PressablePage />
      <LittleLemonFooter />
    </>
  );
}


