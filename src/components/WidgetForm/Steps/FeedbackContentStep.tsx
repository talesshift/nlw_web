import { ArrowLeft } from "phosphor-react";
import { FeedbackType,feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onSetFeedBackType: (type: FeedbackType | null) => void;
}

export function FeedbackContentStep({feedbackType,onSetFeedBackType}:FeedbackContentStepProps) {
    return (
        <>
            <header className="flex items-center">
                <button type="button" className="left-5 top-5 absolute text-zinc-400 hover:text-zinc-100" onClick={() => onSetFeedBackType(null)}>
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
                <span className="text-xl leading-6 flex items-end gap-2">
                    <img 
                    src={feedbackTypes[feedbackType].image.source} 
                    alt={feedbackTypes[feedbackType].image.alt}
                    className="h-5 w-5"/>
                    {feedbackTypes[feedbackType].title}
                </span>
                <CloseButton/>
            </header>
            <form className="my-4 w-full">
                <textarea 
                    className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-text-Secondary text-text-primary border-stroke bg-transparent rounded-md focus:border-brand-default focus:ring-brand-default focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes oque aconteceu..."
                />
            </form>
        </>
    )
}