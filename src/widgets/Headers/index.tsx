import { ExercisesList } from './ui/ExercisesList/ExercisesList';
import { Main } from './ui/Main/Main';
import { Settings } from './ui/Settings/Settings';

export const Headers = () => {
  throw new Error(
    'The \'Headers\' component is a group and cannot be used directly.',
  );
};

Headers.ExercisesList = ExercisesList;
Headers.Main = Main;
Headers.Settings = Settings;
