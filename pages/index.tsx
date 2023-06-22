import useMap from '@/utils/map';
import type { NextPage } from 'next';
import styled from 'styled-components'

const Home: NextPage = () => {
  useMap();

  return <MapContainer id="map"></MapContainer>
}

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export default Home;