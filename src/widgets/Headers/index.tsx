import { getErrorGroupDirectly } from '@/shared/constants';

import { ExercisesList } from './ui/ExercisesList/ExercisesList';
import { Main } from './ui/Main/Main';
import { Settings } from './ui/Settings/Settings';
import { VeesPost } from './ui/VeesPost/VeesPost';

export const Headers = () => getErrorGroupDirectly('Headers');

Headers.ExercisesList = ExercisesList;
Headers.Main = Main;
Headers.Settings = Settings;
Headers.VeesPost = VeesPost;
