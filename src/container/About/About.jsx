import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import Animation from '../../Animation';
import AnimatedLetters from '../../AnimatedLetters';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [abouts, setAbouts] = useState([]);

  const arrGood = ['G', 'o', 'o', 'd'];
  const arrDesign = ['D', 'e', 's', 'i', 'g', 'n'];
  const arrBusiness = ['B', 'u', 's', 'i', 'n', 'e', 's', 's'];

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      {/* <Animation aa={0.004} tt={14} /> */}

      <h2 className='head-text'>
        <span style={{ color: '#ffd700' }}> I Know that</span>
        <span className='animated'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={arrGood}
            idx={1}
          />
        </span>
        <span className='animated'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={arrDesign}
            idx={10}
          />
        </span>
        <br />
        <span style={{ color: '#ffd700' }}>Means</span>

        <span className='animated'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={arrGood}
            idx={1}
          />
        </span>
        <span className='animated'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={arrBusiness}
            idx={10}
          />
        </span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2
              className='bold-text'
              style={{ marginTop: 20, fontSize: 19, color: 'white' }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10, fontSize: 15 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app_bgColor');
