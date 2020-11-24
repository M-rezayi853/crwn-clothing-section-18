import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
// import './directory.scss';

import { DirectoryMenuContainer } from './directory.style';


const Directory = ({ sections }) => {
    // const [sections, setSections] = useState(DIRECTORY_DATA);

    return (
        <DirectoryMenuContainer>
            {sections.map(section => {
                return (
                    <MenuItem 
                        key={section.id} 
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />
                );
            })}
        </DirectoryMenuContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);