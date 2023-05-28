import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [imageType, setImageType] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    files[0].type.split("/").includes("image")
      ? setImageType(true)
      : setImageType(false);
    if (files.length > 0) {
      const file = files[0];
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleSelect = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    file.type.split("/").includes("image")
      ? setImageType(true)
      : setImageType(false);

    setSelectedFile(URL.createObjectURL(file));
  };
  return (
    <>
      <button
        onClick={openModal}
        className="flex hover:bg-gray-900 w-full rounded-md p-2 mb-4"
      >
        <RiAddCircleLine className="text-2xl text-white" />
        <div className="text-lg ml-3 font-semibold text-white">Create</div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl  transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`text-lg  leading-6 text-white text-center ${selectedFile && "flex justify-between"}`}
                  >
                    <h2 className="text-center"> Create new post</h2>
                   {selectedFile &&  <h6 className="text-insta-blue">Next</h6>}
                  </Dialog.Title>
                  {/* <div className="mt-2 ">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}

                  <div
                    className={`border-2 rounded-lg p-8 ${
                      dragging ? "border-blue-500" : "border-white"
                    } flex flex-col justify-center items-center`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onSelect={handleSelect}
                  >
                    <div className="flex justify-center items-center ">
                      {selectedFile && imageType ? (
                        <img
                          src={selectedFile}
                          alt="Selected File"
                          className="mb-4 max-h-64"
                        />
                      ) : selectedFile ? (
                        <video
                          src={selectedFile}
                          alt="Selected File"
                          controls
                          className="mb-4 w-96 h-96"
                        />
                      ) : dragging ? (
                        <div className="text-blue-500 text-white">
                          Drop the files here...
                        </div>
                      ) : (
                        <div>Drag and drop your files here...</div>
                      )}
                    </div>
                    <div className="mt-4">
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleSelect}
                      />
                      <label
                        htmlFor="fileInput"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
                      >
                        Select Files
                      </label>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
