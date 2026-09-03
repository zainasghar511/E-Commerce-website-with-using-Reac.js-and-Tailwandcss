import React, { useState } from 'react';
import { db, storage } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Dashboard = () => {
  const [saleActive, setSaleActive] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSaveData = async () => {
    try {
      setLoading(true);
      let imageUrl = "";
      
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Firestore mein store settings save karna
      await setDoc(doc(db, "settings", "storeInfo"), {
        saleActive: saleActive,
        imageUrl: imageUrl,
        updatedAt: new Date()
      });

      alert("Sale status aur Image update ho gayi!");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md mt-10 border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Admin Dashboard</h2>
        <button 
          onClick={() => signOut(auth)} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      
      {/* Sale Active Toggle */}
      <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg border">
        <span className="font-semibold text-gray-700">Sale Active Status:</span>
        <input 
          type="checkbox" 
          checked={saleActive} 
          onChange={(e) => setSaleActive(e.target.checked)}
          className="w-6 h-6 accent-blue-900 cursor-pointer"
        />
      </div>

      {/* Image Upload Option */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Banner / Product Image Upload Karein:</label>
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border p-2 rounded-lg text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <button 
        onClick={handleSaveData} 
        disabled={loading}
        className="w-full bg-blue-900 text-white p-3 rounded-lg font-bold hover:bg-blue-800 transition disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default Dashboard;