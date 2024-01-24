import Header from './components/navbar'
import HomeScreen from './components/home'
import SkillsScreen from './components/skills'
import ProjectsScreen from './components/projects';
import 'bulma/css/bulma.css';


function App () {
  return (
    <div className="columns is-centered">
      <div className="column is-10">
        <Header />
        <HomeScreen />
        <SkillsScreen />
        <ProjectsScreen />
      </div>
    </div>
  )
  
}


export default App
