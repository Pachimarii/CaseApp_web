import styled from'styled-components';
// page
import SchoolsPage from './pages/SchoolsPage';

const StyledApp = styled.div`
  :root {
    box-sizing: border-box;
    font-size: 62.5%;
    --very-dark-blue-color: hsl(219, 29%, 14%);
    --dark-grey-color: hsl(214, 17%, 51%);
    --dark-grey-opacity-color: hsla(214, 17%, 51%,0.2);
    --violet-color: hsl(235, 69%, 61%);
    --very-light-violet-color: rgba(89, 100, 224, 0.1);
    --half-light-violet-color: rgba(89, 100, 224, 0.4);
    --light-violet-color: hsl(235,82%,77%);
    --card-content-color: hsl(214,17%,51%);
    --scroll-bar-color: rgba(70, 70, 207, 0.6);
    --hovered-scroll-bar-color: rgba(70, 70, 207, 1);
  }

  *,
  ::before,
  ::after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
  }

  body {
    width:100%;
    min-width: 28rem;
    font-family: 'Kumbh Sans', sans-serif;
    overflow-x: hidden;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
                                  
  }
  a {
      text-decoration: none;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <SchoolsPage />
    </StyledApp>
  )
};

export default App;
