import { Link } from "@shadcn/ui";

const TopNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">One</Link>
        </li>
        <li>
          <Link href="/about">Two</Link>
        </li>
        <li>
          <Link href="/contact">Three</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
