import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const TopMenuItems = [
  { name: "Home", href: "/" },
  { name: "Wants List", href: "/wants" },
];

export const Header = () => {
  return (
    <div className="flex m-0">
      <NavigationMenu>
        <NavigationMenuList>
          {TopMenuItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink href={item.href}>
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
