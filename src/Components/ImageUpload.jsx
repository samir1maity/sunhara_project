import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from './firebase'; // Adjust the import path as necessary
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

const db = getFirestore();

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [imageSlots, setImageSlots] = useState(Array(8).fill(null));

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const imagesRef = ref(storage, 'images/');
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
      console.error('Error fetching images:', error.message);
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
        const imageRef = doc(db, 'images', file.name);
        await addDoc(collection(db, 'images'), { name: file.name, url });
        fetchImages();
        setFile(null); // Reset file input after upload
      } catch (error) {
        console.error('Error uploading image:', error.message);
      }
    }
  };

  const handleDelete = async (index) => {
    const imageName = imageSlots[index]?.name;
    if (imageName) {
      const imageRef = ref(storage, `images/${imageName}`);
      try {
        await deleteObject(imageRef);
        const querySnapshot = await getDocs(collection(db, 'images'));
        querySnapshot.forEach(async (doc) => {
          if (doc.data().name === imageName) {
            await deleteDoc(doc.ref);
          }
        });
        setImageSlots((slots) =>
          slots.map((slot, i) => (i === index ? null : slot))
        );
      } catch (error) {
        console.error('Error deleting image:', error.message);
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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={() => handleUpload(null)}
        disabled={!file}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload Image
      </button>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {imageSlots.map((image, index) => (
          <div key={index} className="relative">
            {image ? (
              <>
                <img
                  src={image?.url}
                  alt={`Slot ${index}`}
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleSlotChange(index)}
                  className="absolute bottom-0 right-0 p-2 bg-green-500 text-white rounded"
                >
                  Replace
                </button>
              </>
            ) : (
              <div
                className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500"
              >
                Empty Slot
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
