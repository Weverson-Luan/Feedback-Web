import { CloseButton } from "../../../CloseButton";

interface FeedbackSuccessStepProps{
  onFeedbackRestartRequested: ()=> void;
}
export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps){
  return(
   <>
    <header>
      <CloseButton />
     </header>

     <div className="flex flex-col items-center py-10 w-[304px]">   
     <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.5 32C36.5 34.209 34.709 36 32.5 36H4.5C2.291 36 0.5 34.209 0.5 32V4C0.5 1.791 2.291 0 4.5 0H32.5C34.709 0 36.5 1.791 36.5 4V32Z" fill="#77B255"/>
    </svg>
        <span className="text-xl mt-2"> Agradecemos o feedback! 😃</span>

        <button 
          type="submit"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6  hover:bg-zinc-700  focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          onClick={()=> onFeedbackRestartRequested()}
        >
          Quero enviar outro
        </button>
     </div>
   </>
  )
}