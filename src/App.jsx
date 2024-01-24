import Header from './components/navbar'
import HomeScreen from './components/home'
import SkillsScreen from './components/skills'
import ProjectsScreen from './components/projects';
import ContactMe from './components/contactme';
import 'bulma/css/bulma.css';


function App () {
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #001f3f, #111)',
  };

  return (
    <div className="columns is-centered" style={backgroundStyle}>
      <div className="column is-10">
        <Header  style={backgroundStyle}/>
        <HomeScreen />
        <SkillsScreen />
        <ProjectsScreen />
        <ContactMe />
      </div>
    </div>
  )
}


export default App
