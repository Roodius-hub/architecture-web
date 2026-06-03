import { useState } from "react";
import Input from "./Input";
// import { UploadProjectMetaData, UploadProjectsImages } from "../lib/Upload";
// import { metaData } from "../lib/types";

export default function Upload() {
  const [Designfile, SetDesignFile] = useState<File | null>(null);
  const [DrawingFile,SetDrawingFile ] = useState<File | null>(null);
  const [ProcessFile, SetProcessFile] = useState<File | null>(null);
  const [VisualizationFile, SetVisualizationFile] = useState<File | null>(null);

  const [title, SetTitle] = useState<string>("");
  const [overview, SetOverview] = useState<string>("");
  const [TechnicalDetail, SetTechnicalDetail] = useState<string>("");

  const [area, SetArea] = useState<string>("");
  const [Sitearea, SetSiteSetArea] = useState<string>("");
  const [status, SetStatus] = useState<string>("");
  const [Duration, SetDuration]  = useState<string>("");

  // saving data into formdata
  const handleSave = async () => {
    const newForm = new FormData();
    // newForm.append("Title", title);
    // newForm.append('Overview', overview);
    // newForm.append('Technical Details', TechnicalDetail);
    // newForm.append('Area', area);
    // newForm.append('SiteArea', Sitearea);
    // newForm.append('status', status);
    // newForm.append('Duration', Duration);

    if (Designfile) {
      newForm.append("DesignFile", Designfile);
    }

    if (DrawingFile) {
      newForm.append("DesignFile", DrawingFile);
    }

    if (ProcessFile) {
      newForm.append("ProcessFile", ProcessFile);
    }

    if (VisualizationFile) {
      newForm.append("Visualization", VisualizationFile);
    }
    setTimeout(async () => {
    await UploadProjectsImages(newForm);
    }, 2000)
    await UploadProjectMetaData({title, overview, TechnicalDetail, area, Sitearea, status, Duration})
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#808080] p-4 font-mono">
      <div className="w-full max-w-md border-2 border-black bg-[#c0c0c0] shadow-[6px_6px_0px_#000]">

        {/* Window Header */}
        <div className="bg-[#000080] text-white px-3 py-2 flex justify-between items-center">
          <span className="font-bold">upload.exe</span>
          <span className="border border-white px-2 text-xs">X</span>
        </div>

        <div className="p-5">
          <div className="mb-5">
            <h1 className="text-xl font-bold text-black">
              Upload Images :
            </h1>

            <p className="text-sm text-gray-800 mt-1">
              Fill Project Details
            </p>

            <hr className="border-t border-gray-600 mt-3" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-bold text-black">
                Title
              </label>

              <input value={title}
                onChange={(e) => SetTitle(e.target.value)}
                type="text"
                placeholder="Image Title"
                className="
                  w-full
                  px-2
                  py-1
                  bg-white
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none
                "
              />
            </div>

            <div>
              <label className="block mb-1 font-bold text-black">
                OverView
              </label>

              <textarea value={overview}
              onChange={(e) => SetOverview(e.target.value)}
                rows={3}
                placeholder="Enter image description..."
                className="
                  w-full
                  px-2
                  py-1
                  bg-white
                  resize-none
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none
                "
              />
            </div>

            <div>
              <label className="block mb-1 font-bold text-black">
                Technical Details
              </label>

              <textarea value={TechnicalDetail}
              onChange={(e) => SetTechnicalDetail(e.target.value)}
                rows={3}
                placeholder="Enter image description..."
                className="
                  w-full
                  px-2
                  py-1
                  bg-white
                  resize-none
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none
                "
              />
            </div>

            <div className="block mb-1 font-bold text-black">
              <label htmlFor="">Project Facts</label>
              <ul className="flex items-center justify-center text-sm gap-4">
                <li><input value={area}
                onChange={(e) => SetArea(e.target.value)}
                 className="w-[60px]
                  px-2
                  py-1
                  bg-white
                  resize-none
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none" type="text" placeholder="Area"/></li>
                  <li><input value={Sitearea}
                  onChange={(e) => SetSiteSetArea(e.target.value)} 
                  className="w-[90px]
                  px-2
                  py-1
                  bg-white
                  resize-none
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none" type="text" placeholder="Site Area"/></li>
                  <li><input value={status}
                  onChange={(e)  => SetStatus(e.target.value.toLocaleUpperCase())} 
                  className="w-[70px]
                  px-2
                  py-1
                  bg-white
                  resize-none
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none" type="text" placeholder="Status"/></li>
                  <li><input value={Duration}
                  onChange={(e) => SetDuration(e.target.value)} 
                  className="w-[90px]
                  px-2
                  py-1
                  bg-white
                  resize-none
                  border
                  border-t-gray-700
                  border-l-gray-700
                  border-r-white
                  border-b-white
                  outline-none" type="text" placeholder="Duration"/></li>
              </ul>
            </div>

              <Input onChange={SetDesignFile} label="Design Concept"/>

              <Input onChange={SetDrawingFile} label="Drawing"/>

              <Input onChange={SetProcessFile} label="Process Gallery"/>

              <Input onChange={SetVisualizationFile} label="Visualization Gallery"/>

            <button
              className="
                w-full
                bg-[#c0c0c0]
                py-2
                font-bold
                text-black
                border
                border-t-white
                border-l-white
                border-r-black
                border-b-black
                active:border-t-black
                active:border-l-black
                active:border-r-white
                active:border-b-white
              "
             >
              Upload
            </button>

            <div className="text-center text-xs text-gray-700 mt-3">
              Retro Image Uploader v1.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}