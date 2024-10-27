import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Spiner from "../../utils/Spiner";
interface GetGoogleAddressModallProps {
  setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setProvider: React.Dispatch<React.SetStateAction<string>>;
}
const GetGoogleAddressModall: React.FC<GetGoogleAddressModallProps> = ({
  setOpenInfo,
  setOpenChange,
  address,
  setAddress,
  setCity,
  setProvider,
}) => {
  const mapRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null); // Keep track of the map instance
  const [marker, setMarker] = useState(null); // Keep track of the marker instance
  const [Loading, setLoading] = useState(false);
  console.log(position ,map);
  useEffect(() => {
    // Load Neshan SDK dynamically
    const loadNeshanSDK = () => {
      const script = document.createElement("script");
      script.src =
        "https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js";
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      // Use Geolocation API to get the user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const testLMap = new L.Map(mapRef.current, {
              key: "web.9769f65e037047f18e87ed818a5e7e68", // Replace with your actual API key
              maptype: "neshan",
              poi: false,
              traffic: false,
              center: [latitude, longitude], // Set the center to the user's location
              zoom: 15, // Adjust zoom level as needed
            });

            setMap(testLMap); // Save map instance to state

            // Add a draggable marker for the user's current location
            const userMarker = L.marker([latitude, longitude], {
              draggable: true,
            }).addTo(testLMap);
            setMarker(userMarker); // Save marker instance to state

            // Update position and fetch address when the marker is dragged
            userMarker.on("dragend", (e) => {
              const latLng = e.target.getLatLng();
              setPosition(latLng);
            });
          },
          (error) => {
            console.error("Error getting location:", error);
            // Handle location error (optional)
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    loadNeshanSDK();

    // Clean up by removing the script
    return () => {
      const script = document.querySelector(
        'script[src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Fetch address using reverse geocoding API
  const fetchAddress = (lat, lng) => {
    setLoading(true);

    axios
      .get(`https://api.neshan.org/v4/reverse?lat=${lat}&lng=${lng}`, {
        headers: {
          "Api-Key": "service.b787c6b591dd463b8c081245d75a2d36",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "OK") {
          setAddress(data.formatted_address);
          setCity(data.city);
          setProvider(data.state);
          setOpenInfo(true);
          setOpenChange(false);
        } else {
          setAddress("آدرس پیدا نشد");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setAddress("خطا در گرفتن آدرس");
      })
      .finally(() => {
        setLoading(false); // Stop loading once the request is done (whether success or failure)
      });
  };

  // Handle save address when button is clicked
  const handleSaveAddress = () => {
    if (marker) {
      const latLng = marker.getLatLng();
      fetchAddress(latLng.lat, latLng.lng); // Fetch address for the marker's position
    }
  };

  return (
    <div>
      {/* Map Container */}
      <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>

      {address && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f1f1f1",
          }}
        >
          <h3>آدرس انتخاب‌شده:</h3>
          <p>{address}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="sticky bottom-0 bg-white flex items-center justify-center p-2 border-t-2 z-10">
        <button className="bg-red-400 p-2" onClick={handleSaveAddress}>
          {Loading ? <Spiner /> : " تایید موقیت مکانی"}
        </button>
      </div>
    </div>
  );
};

export default GetGoogleAddressModall;
