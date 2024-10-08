import {
  MessageCircleOff,
  MessageCircleOffIcon,
  MessageCircleQuestionIcon,
} from "lucide-react";
import React, { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`cursor-pointer ${
          !open ? "text-white" : "text-red"
        } absolute z-50 bottom-4 right-4`}
        onClick={() => setOpen(!open)}>
        {!open ? (
          <MessageCircleQuestionIcon className='size-10 md:size-14' />
        ) : (
          <MessageCircleOffIcon className='size-10 md:size-14' />
        )}
      </div>
      {/* Chatbot */}
      {open && (
        <iframe
          src='https://www.blackbox.ai/agent/NexGenTrike-NaviSightso4vcFhb'
          width='100%'
          className='h-screen w-full absolute z-40 overflow-hidden'
        />
      )}
    </>
  );
};

export default Chatbot;
