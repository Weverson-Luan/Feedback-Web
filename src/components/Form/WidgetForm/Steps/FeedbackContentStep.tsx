
//icons
import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";

//types
import { FeedbackType, feedbackTypes } from "..";

//components
import { CloseButton } from "../../../CloseButton";
import { ScreenShotButton } from "../../ScreenShotButton/ScreenShotButton";

interface FeedbackContentStepProps{
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: ()=> void;
  onFeedbackSent: ()=> void;

}
export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent 
  }: FeedbackContentStepProps){

  const [ screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment]= useState("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];


  function handleSubmitFeedback(event: FormEvent){
    event.preventDefault();
    onFeedbackSent()
  }
  return(
   <>
      <header>
      <button 
        className="w-4 h-4 top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={()=> onFeedbackRestartRequested()}
      >
         <ArrowLeft weight="bold"/>
       </button>

      <span className="text-xl leading-6 flex items-center gap-2" >
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
        { feedbackTypeInfo.title }
      </span>
      <CloseButton />
     
      </header>

    <form 
      className="my-4 w-full"
      onSubmit={handleSubmitFeedback}
    >
    
      <textarea 
        className="min-w=[304px] w-full min-h[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:outline focus:border-brand-500 focus:ring-blue-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin"
        placeholder="Conte com detalhes oque está acontecendo..."
        onChange={( event )=> setComment(event.target.value) }
      /> 

      <footer className="flex gap-2 mt-2">
      <ScreenShotButton 
        screenshot={screenshot}
        onScreenShotTook={setScreenshot}
      />
    
        <button
          type="submit"
          disabled={comment.length === 0}
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center text-sm bg-brand-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors  disabled:opacity-50 disabled:hover:bg-brand-500"
        >
            Enviar feedback

        </button>
      </footer>
    </form>

    </>
  )
}