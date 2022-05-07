import { CloseButton } from "../CloseButton";
import bugImage from '../../images/bug.svg'
import ideaImage from '../../images/Idea.svg'
import toughtImage from '../../images/Thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = { 
    bug:{
        title:'Problema',
        image:{
            source:bugImage,
            alt:'Imagem de um inseto'
        }
    },
    idea:{
        title: 'Ideia',
        image:{
            source:ideaImage,
            alt:'Imagem de uma lampada'
        }
    },
    other:{
        title: 'Problema',
        image:{
            source:toughtImage,
            alt:'Imagem de um balão de pensamento'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const[feedbackType,setFeedBackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-surface-Primary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ?(
                <FeedbackTypeStep onSetFeedBackType={setFeedBackType}/>
            ):(
                <FeedbackContentStep onSetFeedBackType={setFeedBackType} feedbackType={feedbackType}/>
            )}
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a className="underline underline-offset-2" href="http://www.tales.stolfi.org">TalesShift</a>
            </footer>
        </div>
    )
}