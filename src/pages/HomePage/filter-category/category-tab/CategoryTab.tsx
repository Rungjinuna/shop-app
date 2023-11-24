import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { CategoriesName } from '../../../../store/categories/categories.type';
import styles from './CategoryTab.module.scss';

//타입정의
type CategoryTabProps = {
  text: string;
  categoryName: CategoriesName;
};

//CategoryTab은 함수형 컴포넌트, text와 categoryName을 props로 받는다.
const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.categories);

  const getActiveCategory = () => {
    dispatch(setActiveCategory(categoryName));
  };

  return (
    <button
      className={
        categoryName === category
          ? styles.active_category
          : styles.category_button
      }
      onClick={getActiveCategory}
    >
      {text}
    </button>
  );
};

export default CategoryTab;
