import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';

import MainMenu from '@/components/common/MainMenu.tsx';
import { Container,Row, Col } from 'react-bootstrap';
import {CSSTransition} from "react-transition-group";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainMenu />
      <div className={'main'}>
        <Container className={'narrowContent'}>
          <h2>Latest Work</h2>
          <Row classNames={"fade"}>
            <Col md={4} sm={6} xs={6} xxs={12} className={'workItem'}>
              <a href={"#"}>
                <img src={"https://dummyimage.com/600x400/000/fff"} width={'100%'} />
                <h3>Hoge</h3>
                <p>hoge</p>
              </a>
            </Col>
            <Col md={4} sm={6} xs={6} xxs={12} className={'workItem'}>
              <a href={"#"}>
                <img src={"https://dummyimage.com/600x400/000/fff"} width={'100%'} />
                <h3>Foge</h3>
                <p>fuga</p>
              </a>
            </Col>
            <Col md={4} sm={6} xs={6} xxs={12} className={'workItem'}>
              <a href={"#"}>
                <img src={"https://dummyimage.com/600x400/000/fff"} width={'100%'} />
                <h3>Hoge</h3>
                <p>hoge</p>
              </a>
            </Col>
            <Col md={4} sm={6} xs={6} xxs={12} className={'workItem'}>
              <a href={"#"}>
                <img src={"https://dummyimage.com/600x400/000/fff"} width={'100%'} />
                <h3>Foge</h3>
                <p>fuga</p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
