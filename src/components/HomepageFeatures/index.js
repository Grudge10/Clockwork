import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What Is This?',
    Svg: require('@site/static/img/undraw_blooming_re_2kc4.svg').default,
    description: (
      <>
        This is a documentary website, named Seed of Hope, that focuses on the advocacy of farmers and their role in shaping our world. Our mission is to educate the public on the importance of farming, shed light on the challenges and triumphs of farmers, and to advocate for policies that support them.
      </>
    ),
  },
  {
    title: 'Why Does This Exist?',
    Svg: require('@site/static/img/undraw_farm_girl_dnpe.svg').default,
    description: (
      <>
        This website exists to bring awareness to the hard work and contributions of farmers to our society. We believe that farmers often go unrecognized for the essential work they do, and we want to change that. We want to educate the public on the importance of farming and the role it plays in our daily lives.
      </>
    ),
  },
  {
    title: 'How Can This Help The farmers?',
    Svg: require('@site/static/img/undraw_different_love_a-3-rg.svg').default,
    description: (
      <>
        Support local and small family-owned farms by purchasing their products, advocate for policies that support farmers and sustainable agriculture and educate yourself and others on the challenges facing farmers today.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
