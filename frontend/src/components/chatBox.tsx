import React from "react";
import Navbar from "./nav";
import Input from "./input";
import Temp from "./temp";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo1 from "/logo1.png";


const data = [
  {
    question: "What is bitcoin",
    answer:
      "Jokester began sneaking into the castle in the middle of the \n night and leaving jokes all over the place: under the king's \npillow, in his soup, even in the royal toilet. The king was \nfurious, but he couldn't seem to stop Jokester. And then, one \nday, the people of the kingdom discovered that the jokes left by \nJokester were so funny that they couldn't help but laugh. And \nonce they started laughing, they couldn't stop.",
  },
  {
    question: "What is bitcoin",
    answer:
      "Jokester began sneaking into the castle in the middle of the \n night and leaving jokes all over the place: under the king's \npillow, in his soup, even in the royal toilet. The king was \nfurious, but he couldn't seem to stop Jokester. And then, one \nday, the people of the kingdom discovered that the jokes left by \nJokester were so funny that they couldn't help but laugh. And \nonce they started laughing, they couldn't stop.",
  },
  {
    question: "What is bitcoin",
    answer:
      "Jokester began sneaking into the castle in the middle of the \n night and leaving jokes all over the place: under the king's \npillow, in his soup, even in the royal toilet. The king was \nfurious, but he couldn't seem to stop Jokester. And then, one \nday, the people of the kingdom discovered that the jokes left by \nJokester were so funny that they couldn't help but laugh. And \nonce they started laughing, they couldn't stop.",
  },
  {
    question: "What is bitcoin",
    answer:
      "Jokester began sneaking into the castle in the middle of the \n night and leaving jokes all over the place: under the king's \npillow, in his soup, even in the royal toilet. The king was \nfurious, but he couldn't seem to stop Jokester. And then, one \nday, the people of the kingdom discovered that the jokes left by \nJokester were so funny that they couldn't help but laugh. And \nonce they started laughing, they couldn't stop.",
  },
];

function chatBox() {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <div className="flex-grow px-16 py-6">
        <div className="w-full  flex items-center justify-center">
          {/* Tabs */}
          <Tabs defaultValue="chat" className="w-[400px]">
            <TabsList className="py-8 rounded-md bg-slate-200">
              <TabsTrigger value="chat" className="p-4 w-48 ">
                Chat with Bitcoin Pal
              </TabsTrigger>
              <TabsTrigger value="train" className="p-4 w-48">
                Train and Earn
              </TabsTrigger>
            </TabsList>
            {/* <TabsContent value="chat">
              Make changes to your account here.
            </TabsContent> */}
            <TabsContent value="train">Redirect to Github</TabsContent>
          </Tabs>
        </div>

        {/* Chat */}
        <div className="h-5/6 lg:h-5/6 overflow-y-auto">
          <ScrollArea className="h-[600px] rounded-md  p-4 ">
            {data.map((data, id) => (
              <div key={id} className="mt-4">
                {/* Question Box */}
                <div className="mt-2 flex space-x-2">
                  {/* User Avatar */}
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {/* Question Box */}
                  <div className="  bg-white rounded-md border p-4 w-full">
                    {data.question}
                  </div>
                </div>
                {/* //Answer Box */}
                <div className="mt-2 flex space-x-2">
                  {/* Avatar */}
                  <Avatar>
                    <AvatarImage src={logo1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {/* Messages */}
                  <div className="  bg-white rounded-md border p-4">
                    {data.answer}
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
      <div className="px-2 lg:px-10 py-6  lg:w-full flex items-center justify-center">
        {/* <h1>Thissisisisi</h1> */}
        <div className="w-full">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default chatBox;
