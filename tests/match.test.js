import React from 'react';
import { render } from '@testing-library/react-native';
import MatchCard from '../components/MatchCard';

test('renders MatchCard correctly', () => {
  // Mock data
  const mockHomeId = 1;
  const mockAwayId = 2;
  const mockScore1 = 3;
  const mockScore2 = 2;

  // Render the component with mock props
  const { getByText, getByTestId } = render(
    <MatchCard homeId={mockHomeId} awayId={mockAwayId} score1={mockScore1} score2={mockScore2} />
  );

  // Assertions
  const homeImage = getByTestId('home-image');
  const scoreText = getByText(`${mockScore1}-${mockScore2}`);
  const awayImage = getByTestId('away-image');

  expect(homeImage).toHaveProp('source', { uri: `https://api.sofascore.app/api/v1/team/${mockHomeId}/image` });
  expect(scoreText).toBeTruthy();
  expect(awayImage).toHaveProp('source', { uri: `https://api.sofascore.app/api/v1/team/${mockAwayId}/image` });
});
