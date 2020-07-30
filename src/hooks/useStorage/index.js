import useStorage from './models/useStorage';
import { AsyncStorage } from 'react-native';
export { default as StorageProvider } from './models/StorageProvider';

export default useStorage(AsyncStorage);
