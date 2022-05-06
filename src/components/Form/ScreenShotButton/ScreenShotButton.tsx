import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../../Loading/Loading";

interface ScreenShotProps{
  onScreenShotTook: (screenshot: string | null)=> void;
  screenshot: string | null;
}
export function ScreenShotButton({ onScreenShotTook, screenshot }: ScreenShotProps){
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);


  // function of screenshots
  async function handleTakeScreenshot(){
    setIsTakingScreenShot(!isTakingScreenShot);

    const canvas = await html2canvas(document.querySelector('html')!);

    const base64image = canvas.toDataURL('image/png');

    onScreenShotTook(base64image);

    setIsTakingScreenShot(!isTakingScreenShot);
  }

  if(screenshot){
    return(
      <button
        type="submit"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={()=> onScreenShotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      > 
        <Trash weight="fill" />
      </button>
    )
  }
  return(
    <button
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    onClick={()=> handleTakeScreenshot()}

    >
   {
     isTakingScreenShot ? <Loading /> :  <Camera className="w-6 h-6 text-zinc"/> 
   }
  </button>
  )
}