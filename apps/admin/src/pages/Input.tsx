interface InputProps {
    label:string;
    onChange:  (file: File | null) => void;

}


export default function Input({label ,onChange}:InputProps) {



    return (<>
        <div>
              <label className="block mb-2 font-bold text-black">
               {label}
              </label>

              <div className="bg-[#d4d0c8] border-2 border-dashed border-gray-600 p-3">
                <input onChange={(e) => {
                   const file = e.target.files?.[0] ?? null;
                    onChange(file)
                }} 
                  type="file"
                  className="
                    block
                    w-full
                    text-sm
                    text-black
                    file:bg-[#c0c0c0]
                    file:border
                    file:border-t-white
                    file:border-l-white
                    file:border-r-black
                    file:border-b-black
                    file:px-3
                    file:py-1
                    file:mr-3
                    file:cursor-pointer
                  "
                />
              </div>
            </div>
    </>)
}