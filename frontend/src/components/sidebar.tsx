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
import { useNavigate } from 'react-router-dom';

function sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <Card className="w-64 md:w-72 h-screen ">
        <CardHeader>
          <CardTitle>
            <img src={logo} alt="Logo" className="cursor-pointer"  onClick={() => navigate('/landing')}/>
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

        <CardFooter className="absolute cursor-pointer bottom-0 space-x-2 bg-slate-200 rounded-lg w-64 p-2 m-4">
          <Settings />
          <p>Settings</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default sidebar;
