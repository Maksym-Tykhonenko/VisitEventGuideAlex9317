import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppShell} from './src/navigation/AppShell';
import {NavigationProvider} from './src/navigation/NavigationContext';

import {
  getRemoteConfig,
  setDefaults,
  setConfigSettings,
  fetchAndActivate,
  getValue,
} from '@react-native-firebase/remote-config';
import { getApp } from '@react-native-firebase/app';
import { LoaderScreen } from './src/screens/LoaderScreen';
import { LogLevel, OneSignal } from 'react-native-onesignal';

const FALLBACK_URL = 'https://brisk-web-api.top/';

function App(): React.JSX.Element {
  const [initialUrl, setInitialUrl] = useState(null);
  const [initialId, setInitialId] = useState('rFa76uSU');
  const [initialUrlToOurBack, setInitialUrlToOurBack] = useState('https://true-cluster-co.top/');
  const [oneSignKkkk, setOneSignKkkk] = useState('89c2893e-0a92-4358-98b4-2db2e0a6244d')

  useEffect(() => {

    const loadRemoteConfig = async () => {
      try {
        const app = getApp();
        const rc = getRemoteConfig(app);

        await setDefaults(rc, {
          DefLin: FALLBACK_URL,
        });

        await setConfigSettings(rc, {
          minimumFetchIntervalMillis: __DEV__ ? 0 : 300000,
        });

        await fetchAndActivate(rc);

        const remoteUrl = getValue(rc, 'DefLin').asString();

        if (remoteUrl && remoteUrl.startsWith('http')) {
          setInitialUrl(remoteUrl);
        } else {
          setInitialUrl(FALLBACK_URL);
        }
      } catch (error) {
        console.log('Remote Config error:', error);
        setInitialUrl(FALLBACK_URL);
      }
    };

    const initOnsignall = async () => {
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal ініціалізація
    OneSignal.initialize(oneSignKkkk);
    //OneSignal.Debug.setLogLevel(OneSignal.LogLevel.Verbose);
  };

    loadRemoteConfig();
    initOnsignall();
  }, []);

  /////////////////////////////////////////////
  

  if (!initialUrl) {
    return (
      <>
        <LoaderScreen />
      </>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationProvider>
        <AppShell
          initialUrl={initialUrl}
          initialId={initialId}
          initialUrlToOurBack={initialUrlToOurBack}
          oneSignKkkk={oneSignKkkk}
        />
      </NavigationProvider>
    </SafeAreaProvider>
  );
};

export default App;
