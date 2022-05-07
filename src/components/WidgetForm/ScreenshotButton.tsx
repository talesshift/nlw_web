import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import Loading from "./Loading";


interface ScreenshotButtonPrpps {
    screenshot:string|null;
    onSetScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton({onSetScreenshot,screenshot}: ScreenshotButtonPrpps ) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
    

    async function takeScreenshot(){
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        onSetScreenshot(base64image);
        setIsTakingScreenshot(false);
    }
    if (screenshot){
        return(
            <button 
                type="button" 
                className="p-1 h-10 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage:`url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 120,
                }}
                onClick={() => onSetScreenshot(null)}
            >
                <Trash weight="fill"/>
            </button>
        )
    }
    return (
        <button type="button" onClick={takeScreenshot} className="p-2 bg-surface-Secondary-default rounded-md border-transparent text-text-Secondary hover:text-text-primary hover:bg-surface-Secondary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-default">
            {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}    
        </button> 
    )
}