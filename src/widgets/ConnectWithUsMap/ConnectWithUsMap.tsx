"use client";
import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./ConnectWithUsMap.module.scss";

export default function YandexDarkMap() {
  const apikey = '77b8a288-cf00-4968-80f3-0c44dc81fbcf';
  const [isInteractive, setIsInteractive] = useState(false);

  const center = [37.385497, -122.061353];

  return (
    <div
      className={styles["map-container"]}
      style={{ position: 'relative', overflow: 'hidden' }}
      onMouseLeave={() => setIsInteractive(false)}
    >
      <div style={{
        filter: 'invert(90%) hue-rotate(180deg) brightness(98%) contrast(95%)',
        background: '#1A1A1A',
        pointerEvents: isInteractive ? 'auto' : 'none',
      }}>
        <YMaps query={{ apikey }}>
          <Map
            defaultState={{ center: center, zoom: 14 }}
            width="100%"
            height="500px"
            options={{
              suppressMapOpenBlock: true,
            }}
          >
            <Placemark
              geometry={center}
              properties={{ balloonContent: 'Silicon Valley' }}
              options={{
                preset: 'islands#dotIcon',
                iconColor: '#0147FF'
              }}
            />
          </Map>
        </YMaps>
      </div>

      {!isInteractive && (
        <div
          className={styles["map-overlay"]}
          onClick={() => setIsInteractive(true)}
        >
          <span className={styles["map-overlay__text"]}>Enter, to interact with the map</span>
        </div>
      )}
    </div>
  );
}
