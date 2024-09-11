/** @format */
import { useEffect, useState } from "react";
import carousel1 from "../assets/carousel/carousel-1.jpg";
import carousel2 from "../assets/carousel/carousel-2.jpg";
import carousel3 from "../assets/carousel/carousel-3.png";

// import React, { , useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { storage } from "./firebase"; // Adjust the import path as necessary
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const DB = getFirestore();

import { auth, db } from "./firebase";
import { getDoc } from "firebase/firestore";

const Gallery = () => {
  // checking is user authenticated

  const [isUser, setIsUser] = useState("");

  const fetchedUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("docSnap.datab from gallery", docSnap.data());
        setIsUser(docSnap.data());
      } else {
        console.log("user is not logged in");
      }
    });
  };

  // console.log('isUser', isUser)

  useEffect(() => {
    fetchedUserData();
  }, []);

  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [imageSlots, setImageSlots] = useState(Array(8).fill(null));

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const imagesRef = ref(storage, "images/");
    try {
      const res = await listAll(imagesRef);
      const urls = await Promise.all(
        res.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { name: item.name, url };
        })
      );
      setImages(urls);
      const slots = Array(8).fill(null);
      urls.forEach((img, index) => {
        if (index < 8) slots[index] = img;
      });
      setImageSlots(slots);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (index) => {
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        const imageRef = doc(DB, "images", file.name);
        await addDoc(collection(DB, "images"), { name: file.name, url });
        fetchImages();
        setFile(null); // Reset file input after upload
      } catch (error) {
        console.error("Error uploading image:", error.message);
      }
    }
  };

  const handleDelete = async (index) => {
    const imageName = imageSlots[index]?.name;
    if (imageName) {
      const imageRef = ref(storage, `images/${imageName}`);
      try {
        await deleteObject(imageRef);
        const querySnapshot = await getDocs(collection(DB, "images"));
        querySnapshot.forEach(async (doc) => {
          if (doc.data().name === imageName) {
            await deleteDoc(doc.ref);
          }
        });
        setImageSlots((slots) =>
          slots.map((slot, i) => (i === index ? null : slot))
        );
      } catch (error) {
        console.error("Error deleting image:", error.message);
      }
    }
  };

  const handleSlotChange = async (index) => {
    const image = imageSlots[index];
    if (file && image) {
      await handleDelete(index);
      await handleUpload(index);
    } else if (file) {
      await handleUpload(index);
    }
  };

  return (
    <div className="text-center px-4 py-4 lg:px-12 bg-[#fffff0]">
      <h1 className="text-4xl font-bold mb-4">Wedding Gallery</h1>
      <p className="text-gray-500 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
      {isUser.role === "admin" && (
        <>
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={() => handleUpload(null)}
            disabled={!file}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload Image
          </button>
        </>
      )}

      <div className="flex flex-wrap justify-center gap-6 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-23 overflow-hidden rounded-lg shadow-lg bg-[#f8f8f3] relative"
          >
            {image ? (
              <>
                <img
                  className="w-full h-64 object-cover"
                  src={image?.url}
                  alt={image?.alt}
                />
                {isUser.role === 'admin' && (
                  <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
                )}
              </>
            ) : (
              <>
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  Empty Slot
                </div>
              </>
            )}

            {/* <div className="p-4">
              <p className="text-gray-700 italic">Wedding on the beach</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
