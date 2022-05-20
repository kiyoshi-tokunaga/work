import Image from 'next/image';
// @ts-ignore
import styles from '@/styles/components/common/MainMenu.module.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default () => {
  return (
    <aside className={styles.menuLayout}>
      <h1 className={styles.logo}>
        <a href={'/'}>
          <Image
            src={'/vercel.svg'}
            width={150}
            height={150}
            alt={'LogoImage'}
          />
        </a>
      </h1>
      <nav className={styles.mainMenu}>
        <ul>
          <li className={styles.active}>
            <a href={'/'}>Hoge</a>
          </li>
          <li>
            <a href={'/'}>Hoge</a>
          </li>
          <li>
            <a href={'/'}>Hoge</a>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <p>
          <small>Kiyoshi Tokunaga</small>
        </p>
        <ul>
          <li>
            <a href={'https://www.facebook.com/ponkiyo.gokigenyou/'} target={'_blank'}>
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
          </li>
          <li>
            <a href={'https://twitter.com/kiy0p0n'} target={'_blank'}>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </li>
          <li>
            <a href={'https://github.com/kiyoshi-tokunaga'} target={'_blank'}>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
