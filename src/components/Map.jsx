"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, DirectionsRenderer } from "@react-google-maps/api"
import "../styles/Map.css"

const Map = () => {
  // Store location - you can change this in the future
  const [storeLocation, setStoreLocation] = useState({
    lat: 23.8103,
    lng: 90.4125,
    address: "123 Fashion Street, Dhaka, Bangladesh",
  })

  const [userLocation, setUserLocation] = useState(null)
  const [map, setMap] = useState(null)
  const [directions, setDirections] = useState(null)
  const [duration, setDuration] = useState("")
  const [distance, setDistance] = useState("")
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [searchValue, setSearchValue] = useState("")

  const mapRef = useRef(null)
  const directionsServiceRef = useRef(null)
  const geocoderRef = useRef(null)

  // Load required Google Maps libraries
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "geometry"],
  })

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "8px",
  }

  const mapOptions = {
    zoomControl: true,
    streetViewControl: true,
    mapTypeControl: true,
    fullscreenControl: true,
  }

  // Initialize services on map load
  const onMapLoad = useCallback((map) => {
    setMap(map)
    mapRef.current = map
    directionsServiceRef.current = new window.google.maps.DirectionsService()
    geocoderRef.current = new window.google.maps.Geocoder()
  }, [])

  // Get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setUserLocation(location)

          // Get address for user's location
          if (geocoderRef.current) {
            geocoderRef.current.geocode({ location }, (results, status) => {
              if (status === "OK" && results[0]) {
                const userAddress = results[0].formatted_address
                setUserLocation((prev) => ({ ...prev, address: userAddress }))
              }
            })
          }
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to get your location. Please enable location services.")
        },
      )
    } else {
      alert("Geolocation is not supported by your browser.")
    }
  }

  // Calculate and display directions
  const calculateDirections = useCallback(() => {
    if (!userLocation || !storeLocation) return

    const request = {
      origin: userLocation,
      destination: storeLocation,
      travelMode: "DRIVING",
    }

    directionsServiceRef.current.route(request, (result, status) => {
      if (status === "OK") {
        setDirections(result)
        const route = result.routes[0].legs[0]
        setDuration(route.duration.text)
        setDistance(route.distance.text)
      }
    })
  }, [userLocation, storeLocation])

  // Update store location
  const updateStoreLocation = (e) => {
    e.preventDefault()

    if (!searchValue.trim() || !geocoderRef.current) return

    geocoderRef.current.geocode({ address: searchValue }, (results, status) => {
      if (status === "OK" && results[0]) {
        const newLocation = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
          address: results[0].formatted_address,
        }
        setStoreLocation(newLocation)
        setSearchValue("")
        if (map) {
          map.panTo(newLocation)
          map.setZoom(15)
        }
      } else {
        alert("Location not found. Please try a different search.")
      }
    })
  }

  // Reset to default view
  const handleReset = () => {
    setDirections(null)
    setDuration("")
    setDistance("")
    setSelectedMarker(null)
    if (map) {
      map.panTo(storeLocation)
      map.setZoom(15)
    }
  }

  useEffect(() => {
    if (userLocation && storeLocation) {
      calculateDirections()
    }
  }, [userLocation, storeLocation, calculateDirections])

  if (loadError) {
    return (
      <div className="map-error">
        <p>Error loading maps. Please check your API key and internet connection.</p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="map-loading">
        <div className="loading-spinner"></div>
        <p>Loading map...</p>
      </div>
    )
  }

  return (
    <div className="map-section">
      <div className="map-container">
        <div className="map-header">
          <h3>Visit Our Store</h3>
          <p>Find directions to our location</p>
        </div>

        <div className="map-controls">
          <div className="map-search">
            <form onSubmit={updateStoreLocation}>
              <input
                type="text"
                placeholder="Update store location..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="map-buttons">
                <button type="submit" className="search-btn">
                  Update Location
                </button>
                <button type="button" className="location-btn" onClick={getCurrentLocation}>
                  Get My Location
                </button>
                <button type="button" className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </form>
          </div>

          {distance && duration && (
            <div className="direction-info">
              <p>Distance: {distance}</p>
              <p>Duration: {duration}</p>
            </div>
          )}
        </div>

        <div className="map-wrapper">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={storeLocation}
            zoom={15}
            options={mapOptions}
            onLoad={onMapLoad}
          >
            {/* Store Location Marker */}
            <Marker
              position={storeLocation}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
              onClick={() => setSelectedMarker("store")}
            />

            {/* User Location Marker */}
            {userLocation && (
              <Marker
                position={userLocation}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }}
                onClick={() => setSelectedMarker("user")}
              />
            )}

            {/* Info Windows */}
            {selectedMarker === "store" && (
              <InfoWindow position={storeLocation} onCloseClick={() => setSelectedMarker(null)}>
                <div className="info-content">
                  <h4>Store Location</h4>
                  <p>{storeLocation.address}</p>
                </div>
              </InfoWindow>
            )}

            {selectedMarker === "user" && userLocation && (
              <InfoWindow position={userLocation} onCloseClick={() => setSelectedMarker(null)}>
                <div className="info-content">
                  <h4>Your Location</h4>
                  <p>{userLocation.address}</p>
                </div>
              </InfoWindow>
            )}

            {/* Directions */}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>

        <div className="store-info">
          <div className="info-item">
            <strong>Store Address:</strong>
            <p>{storeLocation.address}</p>
          </div>
          <div className="info-item">
            <strong>Business Hours:</strong>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map

