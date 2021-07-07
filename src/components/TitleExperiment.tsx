import { useContext } from 'react'

import { ExperimentContext } from '../contexts/experiment'
import variant from '../libs/getRandomVariant'

const TitleExperiment = () => {
  const { variant } = useContext(ExperimentContext)

  return (
    <>
      <h1>{variant.data?.title}</h1>
      <h2>{variant.data?.description}</h2>
    </>
  )
}

export default TitleExperiment
