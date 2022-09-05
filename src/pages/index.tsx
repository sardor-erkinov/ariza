import { ColorSchemeToggle } from '../components/color-scheme/ColorSchemeToggle';
import Intro from '../routes/home/intro';
import Privilege from '../routes/home/privilege';

export default function HomePage() {
  return (
    <>
      <Intro />
      <Privilege />
      <ColorSchemeToggle />
    </>
  );
}
