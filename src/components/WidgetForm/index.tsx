import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import otherImageUrl from '../../assets/other.svg';
import ideaImageUrl from '../../assets/idea.svg';

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { CloseButton } from "../CloseButton";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const FeedbackTypes = {
    BUG:{
        title:'Problema',
        image:{
            source:bugImageUrl,
            alt:'Imagem de um inseto',
        }
    },
    IDEA:{
        title:'Ideia',
        image:{
            source:ideaImageUrl,
            alt:'Imagem de um lâmpada',
        }
    },
    OTHER:{
        title:'Outro',
        image:{
            source:otherImageUrl,
            alt:'Imagem de um balão de pensamento',
        }
    },
}

export type FeedbackType = keyof typeof FeedbackTypes;

export const WidgetForm = () => {
    
    const [ feedbackType , setFeedbackType ] = useState<FeedbackType | null>(null);
    const [ feedbackSent , setFeedbackSent ] = useState(false);

    const handleRestartFeedback = () => {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

           {feedbackSent 
                ? <FeedbackSuccessStep onRestartFeedback={handleRestartFeedback} />
                :
                <>
                    {!feedbackType 
        
                        ?
                        <FeedbackTypeStep 
                        FuncFeedbackType={setFeedbackType}
                        />
                        
                        :
                        <FeedbackContentStep 
                            FeedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback} 
                            onFeedbackSent={setFeedbackSent} 
                        />
                    }
                </>
           }
           
           <footer className="text-xs text-neutral-400">
               Feito com s2 pela <a href="https://www.rocketseat.com.br" target='_blank' className="underline underline-offset-2">ROCKETSEAT</a>
           </footer>
        </div>
    )
}