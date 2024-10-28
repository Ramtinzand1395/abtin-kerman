import { useEffect, useRef, useState } from "react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";
import mapboxgl from "@neshan-maps-platform/mapbox-gl";
import axios from "axios";

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
  setAddress,
  setCity,
  setProvider,
}) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState<
    [number, number] | null
  >(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition([longitude, latitude]);
      },
      (error) => {
        console.error("Error getting location", error);
        setCurrentPosition([51.392173, 35.730954]);
      }
    );
  }, []);

  useEffect(() => {
    if (mapContainerRef.current && currentPosition) {
      mapRef.current = new mapboxgl.Map({
        mapType: mapboxgl.Map.mapTypes.neshanVector,
        container: mapContainerRef.current,
        zoom: 12,
        pitch: 0,
        center: currentPosition,
        minZoom: 2,
        maxZoom: 21,
        trackResize: true,
        mapKey: "web.9769f65e037047f18e87ed818a5e7e68",
        poi: false,
        traffic: false,
      }) as unknown as mapboxgl.Map;

      mapRef.current.on("load", () => {
        drawMarkerOnMap(currentPosition);
      });
    }
  }, [currentPosition]);
  console.log(currentPosition, "currentPosition");
  function drawMarkerOnMap(position: [number, number]) {
    console.log(position);
    const map = mapRef.current;

    if (map) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        " (مختصات فعلی شما) با نگه داشتن مارکر می‌توانید آن را روی نقشه جابه‌جا کنید "
      );
      new mapboxgl.Marker({ color: "#00F975", draggable: true })
        .setPopup(popup)
        .setLngLat(position)
        .addTo(map)
        .togglePopup()
        .on("dragend", (e) => {
          const markerLngLat = e.target.getLngLat();
          fetchAddress(markerLngLat.lat, markerLngLat.lng); // Fetch address when the marker is moved
        });
    }
  }

  const fetchAddress = (lat: number, lng: number) => {
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
      });
  };

  return (
    <div
      ref={mapContainerRef}
      id="map"
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default GetGoogleAddressModall;
