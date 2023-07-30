import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import Navbar from "./nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo1 from "/logo1.png";
import { Skeleton } from "@/components/ui/skeleton";


interface responseSchema {
  question?: string;
  answer?: string;
  error?: string;
}

function ChatBox() {
  const [question, setQuestion] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [responses, setResponses] = useState<responseSchema[]>([]);
  const [answer, setAnswer] = useState<string>("");

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("The question is", question);
    setResponses((prevState: responseSchema[]) => {
      return [...prevState, { question }];
    });
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000", {
        query: question,
      });
      const answer: string = response.data;
      setResponses((prevState: responseSchema[]) => {
        return prevState.map(entry =>  entry.question === question ? {...entry,answer} : entry)
      })
    } catch (e: unknown) {
      console.log(e);
      // setResult({ error: "There was an error processing the request." });
      // setResponses((prevState: responseSchema[]) => {
      //   return [...prevState, {error: 'There was an error processing the request' }];
      // });
      setResponses((prevState: responseSchema[]) => {
        return prevState.map(entry =>  entry.question === question ? {...entry,error: 'there was an error'} : entry)
      })
    }
    setQuestion("")
    setLoading(false);
  };
  console.log(responses);

  // useEffect(() => {
  // },[currentResponse])
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
            {responses?.map((data, id) => (
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
                  <div className="  bg-white rounded-md border p-4 w-full">
                    {!data.answer ? (
                      <div>
                        <Skeleton className=" h-[20px] rounded-full m-1" />
                        <Skeleton className=" h-[20px] rounded-full m-1" />
                        <Skeleton className=" h-[20px] rounded-full m-1" />
                      </div>
                    ) : (
                      data.answer
                    )}
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
          {/* <Input /> */}

          <div className="flex justify-center items-center space-x-2">
            <Input
              className="w-4/5 p-6"
              type="text"
              value={question}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setQuestion(e.target.value)
              }
              placeholder="Ask your Bitcoin Question here..."
            />
            <Button
              className="w-20 p-6 bg-[#F3A417]"
              type="submit"
              onClick={handleSubmit}
              onKeyPress={(e) => {
                if (e.key === "Enter") console.log("Bhaina enter");
              }}
            >
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
