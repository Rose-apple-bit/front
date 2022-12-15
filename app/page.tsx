"use client";

import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import { useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit } = useForm();

  const [camera, setCamera] = React.useState(false);

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  function submit(data) {
    console.log(data);
  }

  return (
    <form
      className="space-y-8 divide-y mx-auto max-w-4xl  divide-gray-200"
      onSubmit={handleSubmit(submit)}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div className=" sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="cover-photo"
              className="block text-2xl my-3 font-medium text-gray-700  text-center sm:mt-px sm:pt-2 w-full"
            >
              Welcome to Find My Furniture
            </label>
            {camera ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCamera(false);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload Photo from Images
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCamera(true);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Take Photo with Camera
              </button>
            )}
            <div className="mt-1 w-full">
              <div className="flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                {camera ? (
                  <Camera
                    onTakePhoto={(dataUri) => {
                      handleTakePhoto(dataUri);
                    }}
                  />
                ) : (
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          accept="image/*"
                          type="file"
                          {...register("file-upload")}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
            <input
              placeholder="Enter your prompt"
              {...register("prompt")}
              className="border-gray-200 border-2 my-3 w-full text-black font-bold py-2 px-4 rounded"
            />
          </div>
        </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      </div>
    </form>
  );
}
