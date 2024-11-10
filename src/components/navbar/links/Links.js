import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      {links.map((link) => {
        return (
          <div key={link.title}>
          <ul className="menu menu-horizontal px-1">
          <li><Link href={link.path}> {link.title} </Link></li>
          </ul>
            
          </div>
        );
      })}
    </div>
  );
};

export default Links;
