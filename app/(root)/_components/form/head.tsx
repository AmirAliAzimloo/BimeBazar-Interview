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
      
      <h3 className={cn("pb-2",titleClass)} >
        {title}
      </h3>

      <hr className="bg-custom-zinc-200" />
    </div>
  )
}

export default Head
