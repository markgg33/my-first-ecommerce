import styled from 'styled-components'
import { mobile } from '../responsive'
import { tablet } from '../responsive'

const Container = styled.div`
    height: 30px;
    background-color: #E09F3E;
    color: black;
    text-align: center;
    align-content: center;
    justify-content: center;
    padding: 5px 0px;
    ${mobile({ fontSize: "15px", height: "50px", })};
`;

const AnnounceText = styled.p`
    font-size: 20px;
    font-weight: 500;
    
`;
const Announcements = () => {
  return (
    <Container>
      <AnnounceText>
      Website is currently working in progress. Currently coding responsive side.
      </AnnounceText>
    </Container>
  )
}

export default Announcements
