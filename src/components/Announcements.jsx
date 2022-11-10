import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #E09F3E;
    color: black;
    text-align: center;
    align-content: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0px;
`
const Announcements = () => {
  return (
    <Container>
        Website is currently working in progress. Thank you for your understanding.
    </Container>
  )
}

export default Announcements