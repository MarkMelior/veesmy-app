import styles from './light.module.scss';

export const Light = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <picture>
        <source srcSet="/images/light.avif" type="image/avif" />
        <img
          alt="light"
          className="w-[71.75rem] flex-none max-w-none dark:hidden"
          decoding="async"
          src="/images/light.avif"
        />
      </picture>
      <picture>
        <source srcSet="/images/light-dark.avif" type="image/avif" />
        <img
          alt="light-dark"
          className="w-[90rem] flex-none max-w-none hidden dark:block"
          decoding="async"
          src="/images/light-dark.avif"
        />
      </picture>
    </div>
  </div>
);
