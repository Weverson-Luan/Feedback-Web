import { Popover } from '@headlessui/react';

//icons phosphor 
import { ChatTeardropDots} from "phosphor-react";
import { useState } from "react";
import { WidgetForm } from '../Form/WidgetForm';

export function Widget(){

  return(
    <Popover className="absolute bottom-5 right-5 md:bottom-10 md:right-8 flex flex-col items-end">

      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h6"/>

        <p className="max-w-0 overflow-hidden group-hover:max-w-xs translate-all duration-500 ease-linear">
          feedback
        </p>
      </Popover.Button>
    </Popover>
  )
}