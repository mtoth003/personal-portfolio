import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import TypeText from './TypeText';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
     </SectionTitle>
     <SectionText>
        I'm a new developer with experience using full stack technologies including : <TypeText/>
     </SectionText>
   </LeftSection>
 </Section>
);

export default Hero;