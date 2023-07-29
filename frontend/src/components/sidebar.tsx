import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Settings } from "lucide-react";

function sidebar() {
  return (
    <div>
      <Card className="w-64 md:w-72 h-screen ">
        <CardHeader>
          <CardTitle>
            {/* <Link to="/">
            </Link> */}
            <img src={logo} alt="Logo" className="cursor-pointer" />
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
                <CommandItem>Chat 1</CommandItem>
                <CommandItem>Chat 2</CommandItem>
                <CommandItem>Chat 3</CommandItem>
                <CommandItem>Chat 3</CommandItem>
                <CommandItem>Chat 3</CommandItem>
                <CommandItem>Chat 3</CommandItem>
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

        <CardFooter className="absolute cursor-pointer bottom-0 space-x-2 bg-slate-200 rounded-lg w-64 p-2 m-4">
          <Settings /> 
          <p>Settings</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default sidebar;
