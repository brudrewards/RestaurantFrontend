import React, { useState } from 'react'
import CafeStep1 from './CafeStep1'
import CafeStep2 from './CafeStep2'
import CafeStep3 from './CafeStep3'
function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div hidden={value !== index}>{value === index && <>{children}</>}</div>
  )
}
const CafeSetup = () => {
  const [activeStep, setActiveStep] = useState(0)

  // Step 1
  const [restaurant, setRestaurant] = useState('')
  const [manager, setManager] = useState('')
  const [phone, setPhone] = useState('')

  // Step 2
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  // Step 3
  //? https://documenter.getpostman.com/view/19033947/UVksLDzd#fc8bf6b4-70be-459f-86c3-ac845a93e996
  const [monday, setMonday] = useState([{ time: 'Closed' }])
  const [tuesday, setTuesday] = useState([{ time: 'Closed' }])
  const [wednesday, setWednesday] = useState([{ time: 'Closed' }])
  const [thursday, setThursday] = useState([{ time: 'Closed' }])
  const [friday, setFriday] = useState([{ time: 'Closed' }])
  const [saturday, setSaturday] = useState([{ time: 'Closed' }])
  const [sunday, setSunday] = useState([{ time: 'Closed' }])

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      // Step 1
      case 'restaurant':
        setRestaurant(value)
        break
      case 'manager':
        setManager(value)
        break
      case 'phone':
        setPhone(value)
        break

      // Step 2
      case 'address':
        setAddress(value)
        break
      case 'state':
        setState(value)
        break
      case 'city':
        setCity(value)
        break
      case 'lon':
        setLon(value)
        break
      case 'lat':
        setLat(value)
        break

      // Step 3
      case 'monday':
        setMonday(value)
        break
      case 'tuesday':
        setTuesday(value)
        break
      case 'wednesday':
        setWednesday(value)
        break
      case 'thursday':
        setThursday(value)
        break
      case 'friday':
        setFriday(value)
        break
      case 'saturday':
        setSaturday(value)
        break
      case 'sunday':
        setSunday(value)
        break
      default:
        console.log('unknown name %s', name)
    }
  }
  const nextStep = () => setActiveStep((p) => p + 1)
  const prevStep = () => setActiveStep((p) => p - 1)

  //TODO: add submit logic
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <TabPanel index={0} value={activeStep}>
        <CafeStep1
          next={nextStep}
          handleChange={handleChange}
          value={{ restaurant, manager, phone }}
        />
      </TabPanel>
      <TabPanel index={1} value={activeStep}>
        <CafeStep2
          next={nextStep}
          handleChange={handleChange}
          value={{ address, state, city, lat, lon }}
        />
      </TabPanel>
      <TabPanel index={2} value={activeStep}>
        <CafeStep3
          next={nextStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={{
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
          }}
        />
      </TabPanel>
    </>
  )
}

export default CafeSetup
