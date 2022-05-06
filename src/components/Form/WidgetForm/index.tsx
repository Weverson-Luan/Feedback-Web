import { useState } from "react";
///components
import { CloseButton } from "../../CloseButton";
import { FeedbackTypesStep } from "./Steps/FeedbackTypesStep";

//images SVG
import imageUrl from "../../assets/bug.svg";
import ImageIdea from "../../assets/idea.svg";
import imageThought from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

// type of feedbacksTypes
export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: imageUrl,
      alt: 'Image de um inset'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ImageIdea,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
      title: 'Outro',
      image: {
        source: imageThought,
        alt: 'Imagem de um balão de pensamento'
      }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);


  //function reset feedbackType
  function handleRestartFeedback(){
    setFeedbackSent(false)
    setFeedbackType(null);
  }
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
   
      {
        feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>

        ):(
          <>   
          {
            !feedbackType ? (
            <FeedbackTypesStep onFeedbackTypeChange={setFeedbackType}/>
            ): 
            <FeedbackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={()=> setFeedbackSent(true)}
            />
            }
          </>
        )
      }
      <footer className="text-xs text-neutral-400">
        Feito com 💘 pela <a className="underline underline-offset-1" href="https://github.com/Weverson-Luan">WLTECH</a>
      </footer>
    </div>
  )
}