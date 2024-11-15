import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { DashboardHeader } from '../(dashboard)/components/DashboardHeader';
import { SearchInput } from '../(dashboard)/components/SearchInput';
import { LandmarkViewCard } from '@/components/landmark';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      header={<DashboardHeader />}
    >
      <SearchInput />
      <LandmarkViewCard
        landmark={{
          id: 1,
          name: 'Landmark Name',
          image: 'https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'A beautiful landmark.',
          address: '123 Landmark St.',
          rating: 4.5,
          createdAt: new Date(),
          region: 'Region',
          updatedAt: new Date(),
        }}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
