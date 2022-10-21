import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '200px'
};

const center = {
    lat: 27.891535,
    lng: 78.078743
};

function Map({ userAddress }) {
    
    const position = {
        lat: userAddress.lat,
        lng: userAddress.lng
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_APP_MAP_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map