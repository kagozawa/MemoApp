import { Redirect, router } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../config';
import { useEffect } from 'react';

const Index = (): JSX.Element => {
  useEffect(() => {
    // ログイン状態の変化を監視
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        // ログインしている場合
        router.replace('/memo/list');
      }
    });
  }, []);

  return <Redirect href='auth/login' />;
};

export default Index;
