import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import User from "./reusable/User";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
export default function MyModal({ mobile }) {
  let [isOpen, setIsOpen] = useState(false);
  const [imageType, setImageType] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [next, setnext] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  let endPoint = useLocation().pathname;
  let endpointArr = endPoint.split("/");
  
  const [postText, setPostText] = useState("");


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
    if (!next) {
      e?.preventDefault();

      const file = e?.target.files[0];
      file?.type.split("/").includes("image")
        ? setImageType(true)
        : setImageType(false);

      setSelectedFile(URL?.createObjectURL(file));
    }
  };

  const handleToggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleSelectEmoji = (emoji) => {
    setPostText((prevPostText) => prevPostText + emoji.native);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex hover:bg-gray-900 w-full rounded-md p-2 mb-4"
      >
        <RiAddCircleLine className="text-2xl text-white" />
        {!mobile && (
          <div className="text-lg ml-3 font-semibold text-white">Create</div>
        )}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 h-96" onClose={closeModal}>
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
                <Dialog.Panel className="relative w-full max-w-2xl max-h-1/2  transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`text-lg  leading-6 text-white text-center  p-2 ${
                      selectedFile && "flex justify-between"
                    }`}
                  >
                    {next && (
                      <h6
                        className="text-insta-blue cursor-pointer"
                        onClick={() => setnext(false)}
                      >
                        Back
                      </h6>
                    )}
                    <h2 className="text-center"> Create new post</h2>
                    {selectedFile && (
                      <h6
                        className="text-insta-blue cursor-pointer"
                        onClick={() => setnext(true)}
                      >
                        {next ? "Share" : "Next"}
                      </h6>
                    )}
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
                    className={`border-2 rounded-lg p-3 ${
                      dragging ? "border-blue-500" : "border-white"
                    } flex ${
                      !next ? "flex-col" : "flex-row"
                    } justify-evenly gap-5 items-center`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onSelect={handleSelect}
                  >
                    {!showEmojiPicker && mobile && !next && (
                      <div className="flex justify-center items-center w-1/2">
                        {selectedFile && imageType ? (
                          <img
                            src={selectedFile}
                            alt="Selected File"
                            className="mb-4 max-h-64"
                          />
                        ) : selectedFile ? (
                          <ReactPlayer
                            url={selectedFile}
                            playing={true}
                            controls={false}
                            loop={true}
                            width={"90%"}
                            // height={"30%"}
                          />
                        ) : dragging ? (
                          <div className="text-blue-500 text-white">
                            Drop the files here...
                          </div>
                        ) : (
                          <div>Drag and drop your files here...</div>
                        )}
                      </div>
                    )}
                     {!showEmojiPicker && !mobile  && (
                      <div className="flex justify-center items-center w-1/2">
                        {selectedFile && imageType ? (
                          <img
                            src={selectedFile}
                            alt="Selected File"
                            className="mb-4 max-h-64"
                          />
                        ) : selectedFile ? (
                          <ReactPlayer
                            url={selectedFile}
                            playing={true}
                            controls={false}
                            loop={true}
                            width={"90%"}
                            // height={"30%"}
                          />
                        ) : dragging ? (
                          <div className="text-blue-500 text-white">
                            Drop the files here...
                          </div>
                        ) : (
                          <div>Drag and drop your files here...</div>
                        )}
                      </div>
                    )}
                    {showEmojiPicker && !mobile && (
                      <div className="relative max-h-46 w-1/2">
                        {
                          <Picker
                            data={data}
                            onEmojiSelect={handleSelectEmoji}
                            emojiTooltip={true}
                            perLine={7}
                            title="Pick your emoji"
                            style={{
                              position: "absolute",
                              zIndex: "30",
                              bottom: "100%",
                              left: "0",
                              outerHeight: "100px",
                              innerHeight: "100px",
                            }}
                          />
                        }
                      </div>
                    )}
                    {next && (
                      <div className="flex flex-col justify-evenly items-center p-4 gap-5 w-1/2">
                        <User img={img} />
                        <textarea
                          className="bg-gray-800 text-white border-0 outline-none"
                          placeholder="Write a caption"
                          value={postText}
                          onChange={(e) => setPostText(e.target.value)}
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                       {!mobile &&  <div
                          style={{}}
                          className="flex justify-between items-center w-full"
                        >
                          <button onClick={handleToggleEmojiPicker}>😀</button>
                          <p className="text-gray-100">
                            {2200 - postText.length}/2200
                          </p>

                          {/* <div className="relative border max-h-46">
                            {showEmojiPicker && (
                              <Picker
                                data={data}
                                onEmojiSelect={handleSelectEmoji}
                                
                                emojiTooltip={true}
                                perLine={7}
                                title="Pick your emoji"
                                style={{
                                  position: "absolute",
                                  zIndex: "30",
                                  bottom: "100%",
                                  left: "0",
                                  outerHeight: "100px",
                                  innerHeight:"100px"
                                }}
                              />
                            )}
                          </div> */}
                        </div>}
                        <input
                          className="bg-gray-800 text-white w-full border-0 outline-none"
                          placeholder="Add location"
                          type="text"
                        />
                      </div>
                    )}
                    {!next && (
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
                    )}
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

let img = "https://img.freepik.com/free-icon/user_318-159711.jpg";
