import { Button, Menu, Portal } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";
import { Breadcrumb } from "@chakra-ui/react";
import { LuHouse } from "react-icons/lu";

export default function Home() {
  const items = [
    { label: "Components", value: "components" },
    { label: "Props", value: "props" },
    { label: "Customization", value: "customization" },
  ];
  return (
    <div>
      <Breadcrumb.Root m="40px">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Menu.Root>
              <Menu.Trigger> </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    {items.map((item: any) => (
                      <Menu.Item key={item.value} value={item.value}>
                        {item.label}
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Breadcrumb.Link href="#">
              <LuHouse />
              Step 1
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Step 2</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Step 3</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Step 4</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <div>
        <Button m="40px" colorPalette="cyan" size="xl" variant="subtle">
          <RiMailLine />
          This is a button
        </Button>
      </div>
    </div>
  );
}
