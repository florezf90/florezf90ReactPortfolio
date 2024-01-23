import Header from './components/navbar'
import HomeScreen from './components/home'
import SkillsScreen from './components/skills'
import 'bulma/css/bulma.css';


function App () {
  return (
    <div className="columns is-centered">
      <div className="column is-10">
        <Header />
        <HomeScreen />
        <SkillsScreen />
      </div>
    </div>
  )
  
}


export default App
