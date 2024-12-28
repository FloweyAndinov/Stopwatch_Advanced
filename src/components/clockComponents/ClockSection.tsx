import IRLtime from '../irltime/IRLtime'
import HelpToggle from '../help/HelpToggle'
import SettingsToggle from '../settings/SettingsToggle'
import ClockCarousel from '../carousel/ClockCarousel'

function ClockSection() {
  return (
    <div id='clock' style={{width:'100vw', height:'100vh', scrollSnapAlign:'start'}}>
        <div style={{position:'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width:'fit-content'}}>
        <ClockCarousel/>
        </div>
        <SettingsToggle/>
        <HelpToggle/>
        <IRLtime/>
    </div>
  )
}

export default ClockSection