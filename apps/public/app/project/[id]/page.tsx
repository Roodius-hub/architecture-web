import { ProjectDetails } from "@/components/ProjectDetails";


export default async function Page(
  {
    params,
  } :{
    params:Promise<{id:string}>,
  }
) {

  const { id } = await params;
  return (<>
    <ProjectDetails id={id}/>
  </>)
}