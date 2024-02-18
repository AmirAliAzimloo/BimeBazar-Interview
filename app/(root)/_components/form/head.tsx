import { cn } from "@/utils/cn";


interface HeadProps{
  title : string;
  titleClass : string;
}

const Head:React.FC<HeadProps> = ({
  title,
  titleClass
}) => {
  return (
    <div>
      
      <span className={cn("inline-block  pb-2",titleClass)} >
        {title}
      </span>

      <hr className="bg-custm-zinc-200" />
    </div>
  )
}

export default Head
