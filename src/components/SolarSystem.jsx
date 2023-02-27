import React from 'react';
import PropType from 'prop-types';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas"> </Title>
        {planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planet: PropType.shape({
    planetName: PropType.string,
    planetImage: PropType.string,
  }).isRequired,
};

export default SolarSystem;
