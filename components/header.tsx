import React from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const Header = () => {
  return (
    <div className="flex">
      <Menubar className="w-content justify-end">
        <MenubarMenu>
          <MenubarContent>
            <MenubarGroup>
              <MenubarTrigger>Test</MenubarTrigger>
              <MenubarItem>Home</MenubarItem>
              <MenubarItem>Wantlist</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
