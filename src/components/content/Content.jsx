import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Title from '../../elements/Title';
import Wrapper from '../../elements/Wrapper';

const Content = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Title>Welcome to the Cinema3D</Title>
        <p>Schedule of screenings</p>
        <ButtonGroup variant='contained' aria-label='Basic button group'>
          <Button>29Jul</Button>
          <Button>30Jul</Button>
          <Button>31Jul</Button>
        </ButtonGroup>
      </div>
    </Wrapper>
  );
};

export default Content;
