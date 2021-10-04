import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    height: "100vh",
    width: "100%",
};

const center = {
    lat: 35.38906,
    lng: 139.426861,
};

const positionAkiba = {
    lat: 35.38906,
    lng: 139.426861,
};

const positionIwamotocho = {
    lat: 35.69397,
    lng: 139.7762,
};

const MyComponent = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDWjBubBc9e56MsobXLN-7UThP5Z5xz-D4">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
                <Marker position={positionAkiba} />
                <Marker position={positionIwamotocho} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MyComponent;