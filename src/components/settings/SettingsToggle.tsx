import { Settings } from 'lucide-react'
import { Dialog, DialogTrigger } from '../ui/dialog'
import SettingsDialog from './SettingsDialog'

function SettingsToggle() {
    return (
        <Dialog>
          <DialogTrigger asChild>
            <span className='cursor-pointer' style={{position: 'absolute', float:'right',right:'2em', top:'50vh', transform: 'translateY(-50%)',}}>
              <Settings style={{color:'hsl(var(--primary))', height:'3.5em', width:'auto'}}/>
            </span>
          </DialogTrigger>
         <SettingsDialog/>
        </Dialog>
      )
}

export default SettingsToggle