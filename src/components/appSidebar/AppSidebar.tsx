import React from 'react';

import SocialSection from '../common/sections/socialSection/SocialSection';
import AboutSection from '../common/sections/aboutSection/AboutSection';
import LoremIpsumSection from '../common/sections/loremIpsumSection/LoremIpsumSection';

const AppSidebar: React.FC = () => (
    <aside>
        <SocialSection />

        <AboutSection />

        <LoremIpsumSection />
    </aside>
);

export default AppSidebar;
