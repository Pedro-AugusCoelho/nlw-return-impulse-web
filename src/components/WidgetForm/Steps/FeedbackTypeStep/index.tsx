import { FeedbackType, FeedbackTypes } from "../..";
import { CloseButton } from "../../../CloseButton";

type Props = {
    FuncFeedbackType:(type:FeedbackType) => void,
}

export const FeedbackTypeStep = ({ FuncFeedbackType }:Props) => {
    
    return(

        <>
            <header>
                <span className="text-xl leading-6 ">Deixe seu feedback</span>
                <CloseButton />
            </header>
            
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(FeedbackTypes).map(([key , item]) => (
                            
                <button
                key={key}
                className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
                onClick={() => FuncFeedbackType(key as FeedbackType)}
                type='button'
                >
                    <img src={item.image.source} alt={item.image.alt} />
                        <span>{item.title}</span>
                    </button>
                        
                ))}
            </div>
        </>
    )
}