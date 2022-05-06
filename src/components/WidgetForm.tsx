import { CloseButton } from "./CloseButton";
import bugImage from '../images/bug.svg'
import ideaImage from '../images/Idea.svg'
import toughtImage from '../images/Thought.svg'
import { useState } from "react";

const feedbackTypes = { 
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const[feedbackType,setFeedBackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-surface-Primary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6"> Deixe seu feedback</span>
                <CloseButton/>
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key,value]) =>{
                    return(
                        <button 
                            className="bg-surface-Secondary-default rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-default focus:border-brand-default focus:outline-none"
                            type="button"
                            key={key}
                            onClick={() => setFeedBackType(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt}></img>
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a className="underline underline-offset-2" href="www.tales.stolfi.org">TalesShift</a>
            </footer>
        </div>
    )
}