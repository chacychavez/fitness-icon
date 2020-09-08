import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';

import GoogleMapsAPI from '../../client-config';
import {
  MapContainer,
  SearchContainer,
  AddressButtonContainer,
  Address,
  Buttons,
  CancelButton,
  ConfirmButton,
} from './styled';

Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();

const CustomGoogleMap = React.memo(
  ({ google, center, width, height, zoom, onConfirm, onCancel }) => {
    const [state, setState] = useState({
      address: '',
      mapPosition: {
        lat: center.lat,
        lng: center.lng,
      },
      markerPosition: {
        lat: center.lat,
        lng: center.lng,
      },
    });

    /**
     * Get the current address from the default map position and set those values in the state
     */
    useEffect(() => {
      Geocode.fromLatLng(state.mapPosition.lat, state.mapPosition.lng).then(
        (response) => {
          const address = response.results[0].formatted_address;

          setState((_state) => {
            const newState = { ..._state };
            newState.address = address || '';

            return newState;
          });
        },
        (error) => {
          console.error(error);
        },
      );
    }, [state.mapPosition.lat, state.mapPosition.lng]);

    /**
     * When the marker is dragged you get the lat and long using the functions available from event
     * object. And then set those values in the state.
     *
     * @param event
     */
    const onMarkerDragEnd = (event) => {
      const newLat = event.latLng.lat();
      const newLng = event.latLng.lng();

      Geocode.fromLatLng(newLat, newLng).then(
        (response) => {
          const address = response.results[0].formatted_address;

          setState((_state) => {
            const newState = { ..._state };

            newState.address = address || '';
            newState.markerPosition = {
              lat: newLat,
              lng: newLng,
            };
            newState.mapPosition = {
              lat: newLat,
              lng: newLng,
            };

            return newState;
          });
        },
        (error) => {
          console.error(error);
        },
      );
    };

    /**
     * When the user types an address in the search box
     * @param place
     */
    const onPlaceSelected = (place) => {
      const address = place.formatted_address;
      const latValue = place.geometry.location.lat();
      const lngValue = place.geometry.location.lng();
      // Set these values in the state.

      setState((_state) => {
        const newState = { ..._state };

        newState.address = address || '';
        newState.markerPosition = {
          lat: latValue,
          lng: lngValue,
        };
        newState.mapPosition = {
          lat: latValue,
          lng: lngValue,
        };

        return newState;
      });
    };

    const handleCancel = () => {
      onCancel();
    };

    const handleConfirm = () => {
      onConfirm(state);
    };

    const AsyncMap = withScriptjs(
      withGoogleMap(() => (
        <div>
          <GoogleMap
            google={google}
            defaultZoom={zoom}
            defaultCenter={{
              lat: state.mapPosition.lat,
              lng: state.mapPosition.lng,
            }}
            options={{
              streetViewControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
            }}
          >
            {/* Marker */}
            <Marker
              google={google}
              name="Dolores park"
              draggable
              onDragEnd={onMarkerDragEnd}
              position={{
                lat: state.markerPosition.lat,
                lng: state.markerPosition.lng,
              }}
            />
            <Marker />
            {/* For Auto complete Search Box */}
          </GoogleMap>
          <SearchContainer width={width} height={height}>
            <Autocomplete
              style={{
                width: `${width - 50}px`,
                height: '40px',
                padding: '0 16px',
                margin: '15px',
                float: 'left',
              }}
              onPlaceSelected={onPlaceSelected}
              types={[]}
            />
          </SearchContainer>
        </div>
      )),
    );
    if (center.lat !== undefined) {
      return (
        <MapContainer width={width + 150}>
          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
            loadingElement={(
              <div
                style={{ width: `${width}px`, height: `${height + 100}px` }}
              />
            )}
            containerElement={<div style={{ height: `${height + 100}px` }} />}
            mapElement={(
              <div
                style={{
                  width: `${width + 150}px`,
                  height: `${height + 100}px`,
                  position: 'absolute',
                }}
              />
            )}
          />
          <AddressButtonContainer>
            <Address>{state.address}</Address>
            <Buttons>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
              <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
            </Buttons>
          </AddressButtonContainer>
        </MapContainer>
      );
    }
    return <div style={{ height }} />;
  },
);

CustomGoogleMap.propTypes = {
  google: PropTypes.shape({}).isRequired,
  center: PropTypes.shape({
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

CustomGoogleMap.defaultProps = {
  onConfirm: null,
  onCancel: null,
};

export default CustomGoogleMap;
