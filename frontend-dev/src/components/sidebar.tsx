import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import logo from "/logo.png";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


function sidebar() {
  const navigate = useNavigate();

  const redirect = () => {
    window.location.href = "https://github.com/ecurrencyhodler/Bitcoin-PAL";
  };

  return (
    <div>
      <Card className="w-64 md:w-72  h-full ">
        <CardHeader>
          <CardTitle>
            <img
              src={logo}
              alt="Logo"
              className="cursor-pointer"
              onClick={() => navigate("/landing")}
            />
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>

        {/* <CardContent>
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components ..</AlertDescription>
          </Alert>{" "}
        </CardContent> */}

        <CardContent>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Chat History">
                <CommandItem>Chat 1 ....</CommandItem>
                <CommandItem>Chat 2 ....</CommandItem>
                <CommandItem>Chat 3 ....</CommandItem>
                <CommandItem>Chat 4 ....</CommandItem>
                <CommandItem>Chat 5 ....</CommandItem>
                <CommandItem>Chat 6 ....</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              {/* <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup> */}
            </CommandList>
          </Command>
        </CardContent>

        <CardFooter className=" cursor-pointer  space-x-2 absolute bottom-0 justify-center rounded-lg w-48 md:w-64 p-2 m-4">
          <div className="flex-col space-y-2 items-center">
            <Button
              onClick={redirect}
              variant="outline"
              className="p-4 w-64 bg-black text-white"
            >
              Train and Earn
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="p-4 w-64"
            >
              <Settings />
              <p className="ml-4">Settings</p>{" "}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default sidebar;
