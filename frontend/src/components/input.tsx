import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import axios from 'axios';

export default function InputWithButton() {
  const [textValue, setTextValue] = useState<string>("");
  const [result, setResult] = useState<any | null>(null); // Replace 'any' with appropriate type for the result data
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("The question is",textValue)
    setTextValue("")
    setResult(null);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000", {
        query: textValue,
      });

      setResult(response.data);
    } catch (e: unknown) {
      console.log(e);
      setResult({ error: "There was an error processing the request." });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <Input
        className="w-4/5 p-6"
        type="text"
        value={textValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value)}
        placeholder="Ask your Bitcoin Question here..."
      />
      <Button
        className="w-20 p-6 bg-[#F3A417]"
        type="submit"
        onClick={handleSubmit}
      >
        <Send />
      </Button>
    </div>
  );
}
