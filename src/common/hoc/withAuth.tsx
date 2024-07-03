import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { auth } from '../../../lib/firebase';
import { signIn } from '@/store/reducers/userReducer';
import { User } from 'firebase/auth';

const WithAuth = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user);
    
    useEffect(() => {
      auth.onAuthStateChanged((user: User | null) => {
        if(user) {
          dispatch(signIn(user));
        } else {
          router.replace('/login');
        }
      });
      
    }, []);

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default WithAuth;
