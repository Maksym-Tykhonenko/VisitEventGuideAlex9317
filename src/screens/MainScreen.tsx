import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {BottomTabBar} from '../components/nav/BottomTabBar';
import {DiningCartProvider, useDiningCart} from '../context/DiningCartContext';
import {GuideSavedProvider} from '../context/GuideSavedContext';
import {GuestInfoProvider, useGuestInfo} from '../context/GuestInfoContext';
import {colors} from '../constants/theme';
import type {DiningOverlay} from '../types/dining';
import type {EventsOverlay} from '../types/events';
import type {GuideOverlay} from '../types/guide';
import type {MainOverlay, MainTab} from '../types/clubPass';
import {ClubPassFullViewScreen} from './clubPass/ClubPassFullViewScreen';
import {ClubPassScreen} from './clubPass/ClubPassScreen';
import {EditGuestInfoScreen} from './clubPass/EditGuestInfoScreen';
import {DiningScreen} from './dining/DiningScreen';
import {MyOrdersScreen} from './dining/MyOrdersScreen';
import {OrderCartScreen} from './dining/OrderCartScreen';
import {OrderReceivedScreen} from './dining/OrderReceivedScreen';
import {OrderSummaryScreen} from './dining/OrderSummaryScreen';
import {EventDetailScreen} from './events/EventDetailScreen';
import {EventsScreen} from './events/EventsScreen';
import {GuideLocationDetailScreen} from './guide/GuideLocationDetailScreen';
import {GuideScreen} from './guide/GuideScreen';
import {ChatScreen} from './chat/ChatScreen';

function DiningFlow({
  overlay,
  setOverlay,
}: {
  overlay: DiningOverlay;
  setOverlay: (overlay: DiningOverlay) => void;
}) {
  const {guest} = useGuestInfo();
  const {submitOrder, getCartItems} = useDiningCart();

  if (overlay === 'cart') {
    return (
      <OrderCartScreen
        onBack={() => setOverlay(null)}
        onReview={() => {
          if (getCartItems().length > 0) {
            setOverlay('summary');
          }
        }}
      />
    );
  }

  if (overlay === 'summary') {
    return (
      <OrderSummaryScreen
        onBack={() => setOverlay('cart')}
        onEdit={() => setOverlay('cart')}
        onSubmit={() => {
          const order = submitOrder(guest.guestName);
          if (order) {
            setOverlay('received');
          }
        }}
      />
    );
  }

  if (overlay === 'received') {
    return (
      <OrderReceivedScreen
        onBackToDining={() => setOverlay(null)}
        onViewOrders={() => setOverlay('orders')}
      />
    );
  }

  if (overlay === 'orders') {
    return <MyOrdersScreen onBack={() => setOverlay(null)} />;
  }

  return (
    <DiningScreen
      onOpenCart={() => setOverlay('cart')}
      onOpenOrders={() => setOverlay('orders')}
    />
  );
}

function MainScreenContent() {
  const [activeTab, setActiveTab] = useState<MainTab>('pass');
  const [clubOverlay, setClubOverlay] = useState<MainOverlay>(null);
  const [diningOverlay, setDiningOverlay] = useState<DiningOverlay>(null);
  const [eventsOverlay, setEventsOverlay] = useState<EventsOverlay>(null);
  const [guideOverlay, setGuideOverlay] = useState<GuideOverlay>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null,
  );

  const handleTabChange = (tab: MainTab) => {
    setActiveTab(tab);
    setClubOverlay(null);
    setDiningOverlay(null);
    setEventsOverlay(null);
    setGuideOverlay(null);
    setSelectedEventId(null);
    setSelectedLocationId(null);
  };

  if (clubOverlay === 'fullView') {
    return <ClubPassFullViewScreen onClose={() => setClubOverlay(null)} />;
  }

  if (clubOverlay === 'editGuest') {
    return <EditGuestInfoScreen onBack={() => setClubOverlay(null)} />;
  }

  if (activeTab === 'dining' && diningOverlay !== null) {
    return (
      <DiningFlow overlay={diningOverlay} setOverlay={setDiningOverlay} />
    );
  }

  if (activeTab === 'events' && eventsOverlay === 'detail' && selectedEventId) {
    return (
      <EventDetailScreen
        eventId={selectedEventId}
        onBack={() => {
          setEventsOverlay(null);
          setSelectedEventId(null);
        }}
      />
    );
  }

  if (activeTab === 'guide' && guideOverlay === 'detail' && selectedLocationId) {
    return (
      <GuideLocationDetailScreen
        locationId={selectedLocationId}
        onBack={() => {
          setGuideOverlay(null);
          setSelectedLocationId(null);
        }}
      />
    );
  }

  return (
    <View style={styles.MainScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <View style={styles.MainScreenContent}>
        {activeTab === 'pass' ? (
          <ClubPassScreen
            onOpenFullView={() => setClubOverlay('fullView')}
            onEditGuest={() => setClubOverlay('editGuest')}
          />
        ) : activeTab === 'dining' ? (
          <DiningFlow overlay={null} setOverlay={setDiningOverlay} />
        ) : activeTab === 'events' ? (
          <EventsScreen
            onOpenEvent={eventId => {
              setSelectedEventId(eventId);
              setEventsOverlay('detail');
            }}
          />
        ) : activeTab === 'guide' ? (
          <GuideScreen
            onOpenLocation={locationId => {
              setSelectedLocationId(locationId);
              setGuideOverlay('detail');
            }}
          />
        ) : (
          <ChatScreen />
        )}
      </View>

      <BottomTabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </View>
  );
}

export function MainScreen() {
  return (
    <GuestInfoProvider>
      <DiningCartProvider>
        <GuideSavedProvider>
          <MainScreenContent />
        </GuideSavedProvider>
      </DiningCartProvider>
    </GuestInfoProvider>
  );
}

const styles = StyleSheet.create({
  MainScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  MainScreenContent: {
    flex: 1,
  },
});
