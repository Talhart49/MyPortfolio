import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faLaravel,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import AnimatedLetters from '../../AnimatedLetters';
import Animation from '../../Animation';

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  const experiences = [
    {
      title: 'Matriculation',
      institute: 'Fazaia Degree College, MRF',
      year: '06/2015 - 06/2017',
    },
    {
      title: 'Intermediate',
      institute: 'Fazaia Degree College, MRF',
      year: '07/2017 - 07/2019',
    },
    {
      title: 'Bachelors',
      institute: 'COMSATS University, Islamabad',
      year: '09/2019 - Present',
    },
  ];
  // const [skills, setSkills] = useState([]);

  const [letterClass, setLetterClass] = useState('text-animate');

  const skills = ['P', 'e', 'r', 's', 'o', 'n', 'a', 'l', ' '];
  const studies = ['I', 'n', 'f', 'o', 'r', 'm', 'a', 't', 'i', 'o', 'n'];

  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    // const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    //   setExperiences(data);
    // });

    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);
    // });

    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className='main'>
      <Animation aa={0.001} tt={7} />

      <h2 className='head-text text'>
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={skills}
            idx={1}
          />
        </span>

        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={studies}
            idx={15}
          />
        </span>
      </h2>

      <div className='sub-main'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faJava} color='#EC4D28' />
            </div>
          </div>
        </div>

        <div className='app__skillsection'>
          <motion.div className='app__skills-exp-works'>
            {experiences.map((work) => (
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__skills-exp-work'
                  key={work.title}>
                  <h4 className='title'>{work.title}</h4>
                  <p className='institute'>{work.institute}</p>
                  <p className='year'>{work.year}</p>
                </motion.div>
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AppWrap(Skills, 'skills');
