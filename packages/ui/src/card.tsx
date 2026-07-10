const CDN_DOM = "d1z1e76yk7p645.cloudfront.net";

export function Card({
  Title,
  overview,
  TechnicalDetails,
  ProjectFacts,
  Allkeys,
}: {
  Title: string;
  overview: string;
  TechnicalDetails: string;
  ProjectFacts: string[];
  Allkeys: string[];
}) {
  return (
    <div className="group w-[350px] rounded-2xl border hover:border-purple-700 dark:bg-[#2b2b2b] overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">

      <div className="h-[260px] overflow-hidden">
        <img
          src={`https://${CDN_DOM}/${Allkeys[0]}`}
          alt={Title}
          className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2 flex flex-col ">
        <h3 className="block text-gray-600 text-xl font-semibold line-clamp-1 dark:text-white dark:font-light">
          {Title} 
        </h3>
        
        <p className="block text-gray-600 text-[10px] leading-6 line-clamp-2 dark:text-white">
          {overview}  
        </p>
      </div>
    </div>
  );
}