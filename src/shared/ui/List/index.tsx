import { getErrorGroupDirectly } from '@/shared/constants';

import { ListHorizontal } from './ui/Horizontal/Horizontal';
import { ListItem } from './ui/Item/Item';

// interface IList {
//   items: IListHorizontalItem[][] | IListItem[]
// }

// export const List = ({ items }: IList) => (
//   items.map((item, index) => (
//     <>
//       {'icon' in item ? (
//         <ListItem
//           description={item.description}
//           icon={item.icon}
//           key={item.title}
//           title={item.title}
//           value={item.value}
//         />
//       ) : (
//         <ListHorizontal
//           items={item}
//           key={item[index].title}
//         />
//       )}
//       {index !== items.length - 1 ? <Divider className={styles.divider} /> : null}
//     </>
//   ))
// );

export const List = () => getErrorGroupDirectly('List');

List.Item = ListItem;
List.Horizontal = ListHorizontal;
