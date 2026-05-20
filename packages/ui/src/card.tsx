

export function Card({
  title,
  description,
  cdn
}: {
  title: string;
  description:string;
  cdn:string;
}) {
  return (
    <div className="group cursor-pointer">

  <div className="overflow-hidden rounded-xl">
    <img
      src={cdn}
      width={600}
      height={800}
      className=" rounded-xl
        object-cover
      "
      alt=""
    />
  </div>

  <div className="mt-5 flex justify-between items-start">
    
    <div>
      <h3 className="text-2xl font-semibold text-black">
        {title}
      </h3>

      <p className="text-purple-700 text-sm mt-1">
        - {description}
      </p>
    </div>

  </div>
</div>
  );
}
