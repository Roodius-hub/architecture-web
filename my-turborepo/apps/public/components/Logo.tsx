import {Button} from "../../../packages/ui/src/button"

export default function Logo(){
    function ReDirectToLInkdin(){
        window.open("https://www.linkedin.com/in/Roodius")
    }

    return <>
        <div className="">
            <Button onClick={ReDirectToLInkdin} children={"Logo"}/>
        </div>
    </>
}